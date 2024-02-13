import { Button } from '@/components/ui/button';

import { MenuIcon } from '../icons';

interface MobileNavProps extends React.HTMLAttributes<HTMLDivElement> {}
export const MobileNav = ({ className }: MobileNavProps) => {
  return (
    <nav className={cn(className)}>
      <Button variant="link">
        <MenuIcon />
      </Button>
    </nav>
  );
};
