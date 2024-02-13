import { Logo } from '@/components/logo';

import { MobileNav } from './mobile-nav';
import { Search } from './search';

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-violet-700 to-purple-500">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <MobileNav />
        <Logo withIcon={false} />
        <Search />
      </div>
    </header>
  );
};
