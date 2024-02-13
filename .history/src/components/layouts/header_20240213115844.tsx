import { Logo } from '@/components/logo';

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <MobileNav />
      <Logo />
      <Search />
    </header>
  );
};
