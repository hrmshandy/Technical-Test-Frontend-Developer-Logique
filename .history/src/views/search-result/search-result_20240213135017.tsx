'use client';

import { useSearchParams } from 'next/navigation';
import ResultCard from './result-card';

interface SearchResultProps {
  term?: string;
}

export default function SearchResult() {
    const searchParams = useSearchParams()

  const search = searchParams.get('search')

  return (
    <div className="md:conatiner px-4">
      <div className="mb-6 text-center">
        Search result for :{' '}
        <span className="text-lg font-bold text-purple-700">{term}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <ResultCard />
      </div>
    </div>
  );
}
