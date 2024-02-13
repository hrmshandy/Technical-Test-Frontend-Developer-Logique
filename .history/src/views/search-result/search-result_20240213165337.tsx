'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button, Skeleton } from '@/components/ui';
import { useFetcher } from '@/hooks/useFetcher';
import { titleCase } from '@/lib/utils';

import ResultCard from './result-card';

export default function SearchResult() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  const { data, error, isLoading } = useFetcher(
    `https://itunes.apple.com/search?term=${search}&limit=4`,
  );

  useEffect(() => {
    setCount(data.resultCount);
    setItems(data.results);
  }, []);

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
      {data.resultCount > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {data.results.map((item: any) => (
              <ResultCard key={item.trackId} data={item} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button className="min-w-32">Load More</Button>
          </div>
        </>
      ) : (
        <div className="text-center">Result not found.</div>
      )}
    </div>
  );
}
