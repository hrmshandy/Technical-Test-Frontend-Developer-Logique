import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function titleCase(str: string) {
  const title = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    title[i] = title[i]?.charAt(0)?.toUpperCase() + title[i]?.slice(1);
  }
  return title.join(' ');
}
