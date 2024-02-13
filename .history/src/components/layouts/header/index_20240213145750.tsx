import { Logo } from '@/components/logo';

import { MobileNav } from '../mobile-nav';
import { Search } from '../search';

export const Header = () => {
  return (
    <header className="relative h-28 overflow-hidden">
      <div className="absolute bottom-0 z-10 size-[2000px] rounded-b-full bg-gradient-to-r from-violet-700 to-purple-500 shadow-md" />
      <div className="relative -top-6 z-50 mx-auto flex h-16 items-center justify-between px-4 md:container">
        <MobileNav className="relative -left-2 -top-2" />
        <Logo withIcon={false} />
        <Search className="relative -right-2 -top-2" />
      </div>
    </header>
  );
};
