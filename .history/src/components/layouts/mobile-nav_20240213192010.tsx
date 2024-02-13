import Link from 'next/link';

import { Button, Drawer, DrawerContent, DrawerTrigger } from '@/components/ui';
import { cn } from '@/lib/utils';

import { MenuIcon } from '../icons';

interface MobileNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MobileNav = ({ className }: MobileNavProps) => {
  return (
    <nav className={cn(className)}>
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button variant="icon">
            <MenuIcon className="size-4" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-screen max-w-56">
          <div className="p-4">
            <Link
              href="/"
              className="flex h-8 w-full items-center rounded-lg bg-slate-100 px-3 py-1 text-sm text-slate-700 hover:bg-slate-300"
            >
              Home
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};
