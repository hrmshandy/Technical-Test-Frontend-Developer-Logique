import { useRouter } from 'next/navigation';

import SearchResult from '@/views/search-result/search-result';

export default function Result({ params }: { params: { slug: string } }) {
    const router = useRouter()

  return <SearchResult term={router.query.search} />;
}
