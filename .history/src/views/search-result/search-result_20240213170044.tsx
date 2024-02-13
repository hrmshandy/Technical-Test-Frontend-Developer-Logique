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

  const { data, error, isLoading } = useFetcher(
    `${baseUrl}?term=${search}&limit=4`,
  );

  const loadMore = () => {
    axios
      .get(`${baseUrl}?term=${search}&offset=${count}&limit=4`)
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    setCount(data.resultCount);
    setItems(data.results);
  }, [data]);

  if (error) return <div className="text-center">failed to load</div>;

  if (isLoading)
    return (
      <div className="flex justify-center px-4 md:container">
        <div className="flex max-w-80 space-x-3">
          <Skeleton className="size-26 shrink-0 rounded-xl" />
          <div className="flex w-full flex-col justify-between">
            <div className="mt-1 w-full space-y-2">
              <Skeleton className="h-2 w-6/12" />
              <Skeleton className="h-4 w-9/12" />
            </div>
            <div className="flex items-center justify-between">
              <Skeleton className="h-5 w-12" />
              <Skeleton className="h-5 w-12" />
            </div>
          </div>
        </div>
      </div>
    );

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
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
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
