'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button, Input } from './ui';

const formSchema = z.object({
    keyword: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

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
