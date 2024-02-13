'use client';

import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui';
import { useFetcher } from '@/hooks/useFetcher';
import { titleCase } from '@/lib/utils';

import ResultCard from './result-card';

export default function SearchResult() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  const { data, error, isLoading } = useFetcher(
    `https://itunes.apple.com/search?term=${search}&limit=4`,
  );

  console.log(data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

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
        <button className="btn-grad" type="button">
          Hello
        </button>
      </div>
    </div>
  );
}
