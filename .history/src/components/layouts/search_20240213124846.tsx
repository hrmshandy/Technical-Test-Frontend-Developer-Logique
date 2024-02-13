import { Button } from '@/components/ui/button';

import { SearchIcon } from '../icons';
import { cn } from '@/lib/utils';

export const Search = ({}) => {
  return (
    <div className="">
      <Button variant="link">
        <SearchIcon />
      </Button>
    </div>
  );
};
