"use client";

import { FC } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Code } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
}

export const Logo: FC<LogoProps> = ({
  className,
  size = 'md',
  variant = 'default'
}) => {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <Link 
      href="/" 
      className={cn(
        "group flex items-center gap-2 font-bold tracking-tight transition-all hover:opacity-90",
        sizes[size],
        className
      )}
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/60 to-primary/30 opacity-75 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all" />
        <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-background border">
          <Code className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
        </div>
      </div>
      
      {variant !== 'minimal' && (
        <div className="flex flex-col leading-none">
          <span className="text-foreground">Bhaskar&apos;s</span>
          <span className="text-primary font-extrabold group-hover:text-primary/90 transition-colors">BLOG</span>
        </div>
      )}
    </Link>
  );
}; 