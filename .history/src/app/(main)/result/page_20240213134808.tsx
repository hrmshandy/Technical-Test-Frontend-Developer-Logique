import { useSearchParams } from 'next/navigation';

import SearchResult from '@/views/search-result/search-result';

export default function Result() {
    const router = useRouter()

  return <SearchResult term={query} />;
}
