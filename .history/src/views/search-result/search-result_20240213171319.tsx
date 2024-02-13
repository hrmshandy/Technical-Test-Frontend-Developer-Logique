'use client';

import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button, Skeleton } from '@/components/ui';
import { useFetcher } from '@/hooks/useFetcher';
import { titleCase } from '@/lib/utils';

import ResultCard from './result-card';

export default function SearchResult() {
  const baseUrl = 'https://itunes.apple.com/search';
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [hasNoMore, setHasNoMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    data,
    error,
    isLoading: firstLoading,
  } = useFetcher(`${baseUrl}?term=${search}&limit=4`);

  useEffect(() => {
    setCount(data?.resultCount);
    setItems(data?.results);
  }, [data]);

  const loadMore = () => {
    setIsLoading(true);

    axios
      .get(`${baseUrl}?term=${search}&offset=${count}&limit=4`)
      .then((res) => {
        const { resultCount, results } = res.data;

        if (resultCount <= 0) setHasNoMore(true);

        setCount((current) => current + resultCount);
        setItems((current) => current.concat(results));
        console.log(res);
      })
      .finally(() => setIsLoading(false));
  };

  if (error) return <div className="text-center">failed to load</div>;

  return (
    <div className="px-4 md:container">
      <div className="mb-6 text-center">
        Search result for :{' '}
        <span className="text-lg font-bold text-purple-700">
          {titleCase(search as string)}
        </span>
      </div>
      {count > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item: any) => (
              <ResultCard key={item.trackId} data={item} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button
              className="min-w-32"
              onClick={loadMore}
              disabled={hasNoMore}
            >
              Load More
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center">Result not found.</div>
      )}
    </div>
  );
}
