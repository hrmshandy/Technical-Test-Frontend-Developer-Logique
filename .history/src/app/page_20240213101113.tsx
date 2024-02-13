import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-700 to-purple-500 p-8">
      <div className="flex size-full flex-col items-center justify-center">
        <Logo />
        <div className="absolute bottom-7 flex w-full flex-col gap-4">
          <Input />
          <Button className="w-full">Button</Button>
        </div>
      </div>
    </main>
  );
}
