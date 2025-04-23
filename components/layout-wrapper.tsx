"use client";

import { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface LayoutWrapperProps {
  children: ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export function LayoutWrapper({ children, fullWidth = false, className }: LayoutWrapperProps) {
  const pathname = usePathname();
  
  // Apply different container styles based on the route
  const isHomePage = pathname === "/";
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 w-full">
        <div className={cn(
          "mx-auto px-4 md:px-6 py-6 md:py-10",
          fullWidth || isHomePage ? "max-w-7xl" : "max-w-4xl",
          className
        )}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
} 