import { useSearchParams } from 'next/navigation';

import SearchResult from '@/views/search-result/search-result';

export default function Result() {
  const searchParams = useSearchParams();

  const search = searchParams.get('search');

  return <SearchResult term={search} />;
}
