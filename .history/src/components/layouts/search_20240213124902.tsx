import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { SearchIcon } from '../icons';

export const Search = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Button variant="link">
        <SearchIcon />
      </Button>
    </div>
  );
};
