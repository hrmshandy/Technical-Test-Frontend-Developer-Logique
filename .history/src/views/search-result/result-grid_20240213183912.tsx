import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui';

import ResultCard from './result-card';

interface ResultGridProps {
  count: number;
  items: any;
  loadMore: () => void;
  hasNoMore: boolean;
  isLoading: boolean;
}
export default function ResultGrid({
  count,
  items,
  loadMore,
  hasNoMore,
  isLoading,
}: ResultGridProps) {
  return count > 0 ? (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item: any) => (
          <ResultCard key={item.trackId} data={item} />
        ))}
      </div>
      <div className="mt-4">
        Result: <span className="font-bold">{count}</span>
        {hasNoMore ? 'yes' : 'no'}
      </div>
      <div className="mt-6 text-center">
        <Button
          className="min-w-32"
          onClick={loadMore}
          disabled={hasNoMore || isLoading}
        >
          {isLoading ? <Spinner /> : 'Load More'}
        </Button>
      </div>
    </>
  ) : (
    <div className="text-center">Result not found.</div>
  );
}
