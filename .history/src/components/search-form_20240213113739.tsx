'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import type { VariantProps } from 'class-variance-authority';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { cn } from '@/lib/utils';

import type { buttonVariants } from './ui';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from './ui';

const formSchema = z.object({
  term: z.string().min(3),
});

type buttonVariantsType = typeof buttonVariants;

interface SearchFormProps extends React.HTMLAttributes<HTMLDivElement> {
  buttonVariant?: VariantProps<typeof buttonVariants>;
}

export const SearchForm = ({ className, buttonVariant }: SearchFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      term: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('space-y-4', className)}
      >
        <FormField
          control={form.control}
          name="term"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Artist / Album / Title" {...field} />
              </FormControl>
              <FormMessage className="text-center text-red-100" />
            </FormItem>
          )}
        />
        <Button
          className="w-full"
          type="submit"
          size="lg"
          variant={buttonVariant}
        >
          Search
        </Button>
      </form>
    </Form>
  );
};
