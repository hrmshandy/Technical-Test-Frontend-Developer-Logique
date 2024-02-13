'use client';

import { SearchForm } from '@/components/search-form';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

import { SearchIcon } from '../icons';

interface SearchProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Search = ({ className }: SearchProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={cn(className)}>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="icon">
            <SearchIcon className="size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="flex h-screen flex-col items-center justify-center border-none bg-transparent text-white shadow-none">
          <SearchForm buttonVariant="default" />
        </DialogContent>
      </Dialog>
    </div>
  );
};
