import { Suspense } from 'react';

import SearchResult from '@/views/search-result/search-result';

export default function Result() {
  return (
    <Suspense>
      <SearchResult />
    </Suspense>
  );
}
