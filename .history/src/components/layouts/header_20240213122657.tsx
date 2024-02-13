import { Logo } from '@/components/logo';

import { MobileNav } from './mobile-nav';
import { Search } from './search';

export const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute w-full rounded-b-full bg-gradient-to-r from-violet-700 to-purple-500 pb-[100%]" />
      <div className="relative mx-auto flex h-16 items-center justify-between px-4 md:container">
        <MobileNav />
        <Logo withIcon={false} />
        <Search />
      </div>
    </header>
  );
};
