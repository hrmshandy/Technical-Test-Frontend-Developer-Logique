import { useRouter } from 'next/navigation';

import SearchResult from '@/views/search-result/search-result';

export default function Result({ params }: { params: { search: string } }) {
  return <SearchResult term={params.search} />;
}
