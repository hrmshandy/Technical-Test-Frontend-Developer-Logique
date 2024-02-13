import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-violet-700 to-purple-500 px-8">
      <div className="container relative mx-auto flex h-screen flex-col items-center justify-center">
        <Logo />
        <form className="absolute bottom-7 flex w-full flex-col gap-4">
          <Input placeholder="Artist / Album / Title" inputSize="lg" />
          <Button className="w-full" size="lg" variant="ghost">
            Button
          </Button>
        </form>
      </div>
    </main>
  );
}
