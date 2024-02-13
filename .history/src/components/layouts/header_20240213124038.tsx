import { Logo } from '@/components/logo';

import { MobileNav } from './mobile-nav';
import { Search } from './search';

export const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute bottom-[49.5rem] z-10 w-full scale-[5] rounded-b-full bg-gradient-to-r from-violet-700 to-purple-500 pb-[100%]" />
      <div className="absolute top-0 z-20 size-16 bg-red-500" />
      <div className="relative z-50 mx-auto flex h-20 items-center justify-between px-4 md:container">
        <MobileNav />
        <Logo withIcon={false} />
        <Search />
      </div>
    </header>
  );
};
