import { Logo } from '@/components/logo';

import { MobileNav } from './mobile-nav';
import { Search } from './search';

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <MobileNav />
      <Logo />
      <Search />
    </header>
  );
};
