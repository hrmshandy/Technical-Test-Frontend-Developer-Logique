'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { cn } from '@/lib/utils';

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

interface SearchFormProps extends React.HTMLAttributes<HTMLDivElement> {
  buttonVariant?: 'default' | 'ghost' | 'icon' | null;
  onSearch?: (values: any) => void;
}

export const SearchForm = ({
  className,
  buttonVariant = 'ghost',
  onSearch,
}: SearchFormProps) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      term: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (onSearch && typeof onSearch === 'function') {
      onSearch(values);
    }

    const term = values.term.toLowerCase().replace(/ /g, '+');

    router.push(`/result?search=${term}`);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('space-y-4 w-full text-slate-950', className)}
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
