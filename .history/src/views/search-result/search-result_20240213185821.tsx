'use client';

import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useFetcher } from '@/hooks/useFetcher';
import { debounce, titleCase } from '@/lib/utils';

import Loading from './loading';
import ResultGrid from './result-grid';

export default function SearchResult() {
  const baseUrl = 'https://itunes.apple.com/search';
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [hasNoMore, setHasNoMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const maxCount = 20;

  const {
    data,
    error,
    isLoading: firstLoading,
  } = useFetcher(`${baseUrl}?term=${search}&limit=20`);

  useEffect(() => {
    setCount(data?.resultCount);
    setItems(data?.results);
  }, [data]);

  useEffect(() => {
    if (!search) {
      router.push('/');
    }
  }, [search, router]);

  const loadMore = () => {
    setIsLoading(true);

    const fetchMore = debounce(
      () =>
        axios
          .get(`${baseUrl}?term=${search}&media=media&offset=${count}&limit=4`)
          .then((res) => {
            const { resultCount, results } = res.data;
            const leftCount = maxCount - count;

            if (resultCount <= 0) setHasNoMore(true);

            if (resultCount >= leftCount) {
              setCount((current) => current + leftCount);
              setItems((current) =>
                current.concat(results.slice(0, leftCount)),
              );
              setHasNoMore(true);
            } else {
              setCount((current) => current + resultCount);
              setItems((current) => current.concat(results));
            }
          })
          .finally(() => setIsLoading(false)),
      300,
    );

    fetchMore();
  };

  if (error) return <div className="text-center">failed to load</div>;

  return (
    <div className="px-4 pb-24 md:container">
      <div className="mb-6 text-center">
        Search result for :{' '}
        <span className="text-lg font-bold text-purple-700">
          {search ? titleCase(search as string) : ''}
        </span>
      </div>
      {firstLoading ? (
        <Loading />
      ) : (
        <ResultGrid
          count={count}
          items={items}
          loadMore={loadMore}
          hasNoMore={hasNoMore}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}
