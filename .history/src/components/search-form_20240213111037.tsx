'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button, Input } from './ui';

const formSchema = z.object({
    term: z.string(),
  })

export const SearchForm = ({ className }: { className: string }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          term: "",
        },
      })

      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

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
