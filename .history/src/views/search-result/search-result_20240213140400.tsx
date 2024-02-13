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
    `https://itunes.apple.com/search?term=${search}`,
  );

  console.log(data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="md:conatiner px-4">
      <div className="mb-6 text-center">
        Search result for :{' '}
        <span className="text-lg font-bold text-purple-700">
          {titleCase(search as string)}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <ResultCard />
      </div>
      <Button variant="ghost">Load More</Button>
    </div>
  );
}
