import Link from 'next/link';

import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui';
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
            <div className="">
              <DrawerClose asChild>
                <Button variant="icon">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                  >
                    <path
                      d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Button>
              </DrawerClose>
            </div>
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
