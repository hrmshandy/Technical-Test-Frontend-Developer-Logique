import { cn } from '@/libs/utils';

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {}

export const MenuIcon = ({ className }: IconProps) => {
  return <div className={cn('', className)} />;
};
