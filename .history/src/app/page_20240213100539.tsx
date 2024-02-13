import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-violet-700 to-purple-500 p-8">
      <Logo />
      <div className="absolute bottom-0 gap-4">
        <Input />
        <Button className="w-full">Button</Button>
      </div>
    </main>
  );
}
