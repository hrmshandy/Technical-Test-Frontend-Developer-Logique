import { Logo } from '@/components/logo';

import HeaderBg from './header-bg';
import { MobileNav } from './mobile-nav';
import { Search } from './search';

export const Header = () => {
  return (
    <header className="relative h-28 overflow-hidden">
      <HeaderBg />
      <div className="relative -top-6 z-50 mx-auto flex h-16 items-center justify-between px-4 md:container">
        <MobileNav className="relative -left-2" />
        <Logo withIcon={false} />
        <Search className="relative -right-2" />
      </div>
    </header>
  );
};
