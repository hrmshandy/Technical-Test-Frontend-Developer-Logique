'use client';

import { z } from 'zod';

import { Button, Input } from './ui';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

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
