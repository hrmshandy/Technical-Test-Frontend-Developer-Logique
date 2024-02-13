import { Button } from '@/components/ui/button';

import { MenuIcon } from '../icons';

export const MobileNav = () => {
  return (
    <nav className="">
      <Button variant="link">
        <MenuIcon />
      </Button>
    </nav>
  );
};
