"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, BookOpen, Info, Mail, Tag, ArrowRight, PenSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const categories = ["Technology", "Travel", "Food", "Lifestyle", "Programming", "Health"];

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden relative">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 p-0 pt-0 sm:max-w-sm w-[85vw]">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-4 py-3 flex items-center justify-between">
          <Logo size="md" />
          <SheetClose asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </SheetClose>
        </div>
        
        <div className="px-6 py-6 flex flex-col space-y-6 h-[calc(100%-64px)] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Navigation</h3>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between text-sm rounded-md px-3 py-2 transition-colors mobile-nav-item animate-stagger-fade-in",
                pathname === "/" 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              )}
            >
              <div className="flex items-center">
                <Home className="h-4 w-4 mr-3" />
                <span>Home</span>
              </div>
              {pathname === "/" && <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>}
            </Link>
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between text-sm rounded-md px-3 py-2 transition-colors mobile-nav-item animate-stagger-fade-in",
                (pathname === "/blog" || pathname.startsWith("/blog/")) 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              )}
            >
              <div className="flex items-center">
                <BookOpen className="h-4 w-4 mr-3" />
                <span>Blog</span>
              </div>
              {(pathname === "/blog" || pathname.startsWith("/blog/")) && 
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              }
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between text-sm rounded-md px-3 py-2 transition-colors mobile-nav-item animate-stagger-fade-in",
                pathname === "/about" 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              )}
            >
              <div className="flex items-center">
                <Info className="h-4 w-4 mr-3" />
                <span>About</span>
              </div>
              {pathname === "/about" && <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>}
            </Link>
            <Link
              href="/subscribe"
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between text-sm rounded-md px-3 py-2 transition-colors mobile-nav-item animate-stagger-fade-in",
                pathname === "/subscribe" 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              )}
            >
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3" />
                <span>Subscribe</span>
              </div>
              {pathname === "/subscribe" && <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>}
            </Link>
          </div>

          <div className="space-y-1 animate-fade-in" style={{ animationDelay: "150ms" }}>
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Categories</h3>
            <div className="bg-muted/40 rounded-xl p-3">
              <div className="flex flex-wrap gap-2">
                {categories.map((category, idx) => (
                  <Link 
                    key={category}
                    href={`/category/${category.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="animate-fade-in"
                    style={{ animationDelay: `${idx * 50 + 200}ms` }}
                  >
                    <Badge 
                      variant={pathname === `/category/${category.toLowerCase()}` ? "default" : "secondary"}
                      className="capitalize transition-all hover:scale-105"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {category}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-auto space-y-4 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
              <h3 className="font-medium mb-2 flex items-center">
                <PenSquare className="h-4 w-4 mr-2 text-primary" />
                Stay Updated
              </h3>
              <p className="text-sm text-muted-foreground mb-3">Get notified about the latest articles and updates</p>
              <Button asChild className="w-full rounded-full group" size="sm">
                <Link href="/subscribe" onClick={() => setOpen(false)}>
                  Subscribe Now
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            
            <div className="text-xs text-center text-muted-foreground">
              <p>© {new Date().getFullYear()} Bhaskar&apos;s Blog</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
} 