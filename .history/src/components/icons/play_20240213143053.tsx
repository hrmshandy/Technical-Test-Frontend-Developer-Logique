import { cn } from '@/lib/utils';

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MenuIcon = ({ className }: IconProps) => {
  return <div className={cn('rounded-full', className)}>

  </div>;
};
