import { SearchForm } from '@/components';
import { Logo } from '@/components/logo';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-violet-700 to-purple-500 px-8">
      <div className="container relative mx-auto flex h-screen flex-col items-center justify-center">
        <Logo />
        <SearchForm />
      </div>
    </main>
  );
}
