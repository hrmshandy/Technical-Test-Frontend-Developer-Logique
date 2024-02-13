import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { SearchIcon } from '../icons';

interface SearchProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Search = ({ className }: SearchProps) => {
  return (
    <div className={cn(className)}>
      <Button variant="icon">
        <SearchIcon />
      </Button>
    </div>
  );
};
