'use client';

import ResultCard from './result-card';

export default function SearchResult() {
  return (
    <div className="md:conatiner px-4">
      <div className="mb-6 text-center">
        Search result for :{' '}
        <span className="text-lg font-bold text-purple-700">Json Miraz</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <ResultCard />
      </div>
    </div>
  );
}
