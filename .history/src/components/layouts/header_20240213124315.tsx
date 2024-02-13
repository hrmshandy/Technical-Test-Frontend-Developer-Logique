import { Logo } from '@/components/logo';

import { MobileNav } from './mobile-nav';
import { Search } from './search';

export const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute bottom-[50rem] z-10 w-full scale-[5] rounded-b-full bg-gradient-to-r from-violet-700 to-purple-500 pb-[100%] shadow-md" />
      <div className="relative -top-3 z-50 mx-auto flex h-24 items-center justify-between px-4 md:container">
        <MobileNav />
        <Logo withIcon={false} />
        <Search />
      </div>
    </header>
  );
};
