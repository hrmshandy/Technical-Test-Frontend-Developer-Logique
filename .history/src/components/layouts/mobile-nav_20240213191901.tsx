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
            <Link href="/" className="h-8 w-full rounded px-2 py-1 text-sm">
              Home
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};
