import Link from "next/link";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <LayoutWrapper>
      <div className="flex flex-col items-center justify-center min-h-[70vh] py-12 text-center">
        <h1 className="text-7xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-muted-foreground text-lg max-w-md mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">Explore Blog</Link>
          </Button>
        </div>
      </div>
    </LayoutWrapper>
  );
} 