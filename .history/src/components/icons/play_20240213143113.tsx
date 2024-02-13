import { cn } from '@/lib/utils';

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MenuIcon = ({ className }: IconProps) => {
  return <div className={cn('rounded-full w-8 h-8 border-3', className)}>

  </div>;
};
