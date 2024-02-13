import { Button } from '@/components/ui';

import ResultCard from './result-card';

interface ResultGridProps {
  count: number;
  items: any;
  loadMore: () => void;
}
export default function ResultGrid({
  count,
  items,
  loadMore,
}: ResultGridProps) {
  return count > 0 ? (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item: any) => (
          <ResultCard key={item.trackId} data={item} />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Button className="min-w-32" onClick={loadMore} disabled={hasNoMore}>
          Load More
        </Button>
      </div>
    </>
  ) : (
    <div className="text-center">Result not found.</div>
  );
}
