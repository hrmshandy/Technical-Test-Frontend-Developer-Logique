'use client';

import { useSearchParams } from 'next/navigation';

import { Button, Skeleton } from '@/components/ui';
import { useFetcher } from '@/hooks/useFetcher';
import { titleCase } from '@/lib/utils';

import ResultCard from './result-card';

export default function SearchResult() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  const { data, error, isLoading } = useFetcher(
    `https://itunes.apple.com/search?term=${search}&limit=4`,
  );

  if (error) return <div className="text-center">failed to load</div>;
  //   if (isLoading)
  return (
    <div className="px-4 md:container">
      <div className="flex space-x-3">
        <Skeleton className="size-26 rounded-xl flex-shrink-0" />
        <div className="space-y-2 w-full">
          <Skeleton className="h-4 w-80" />
          <Skeleton className="h-4 w-[200px]" />
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {data.results.map((item: any) => (
          <ResultCard key={item.trackId} data={item} />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Button className="min-w-32">Load More</Button>
      </div>
    </div>
  );
}
