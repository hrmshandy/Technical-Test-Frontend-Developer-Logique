import { Logo } from '@/components/logo';

import { MobileNav } from './mobile-nav';
import { Search } from './search';

export const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute top-[51.5rem] z-10 size-[2000px] rounded-b-full bg-gradient-to-r from-violet-700 to-purple-500 pb-[100%] shadow-md" />
      <div className="relative -top-6 z-50 mx-auto flex h-28 items-center justify-between px-4 md:container">
        <MobileNav className="relative -left-2 -top-2" />
        <Logo withIcon={false} />
        <Search className="relative -right-2 -top-2" />
      </div>
    </header>
  );
};
