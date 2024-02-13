import { Logo } from '@/components';

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <MobileNav />
      <Logo />
      <Search />
    </header>
  );
};
