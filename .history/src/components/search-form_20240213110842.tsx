'use client';

import { Button, Input } from './ui';

export const SearchForm = ({ className }: { className: string }) => {
  return (
    <form className={className}>
      <Input
        className="text-center"
        placeholder="Artist / Album / Title"
        inputSize="lg"
      />
      <Button className="w-full" size="lg" variant="ghost">
        Button
      </Button>
    </form>
  );
};
