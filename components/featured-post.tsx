import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate, cn } from "@/lib/utils";
import { Post } from "@/lib/blog-data";

interface FeaturedPostProps {
  post: Post;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-background">
      <div className="md:hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          width={800}
          height={450}
          className="object-cover w-full"
          priority
        />
      </div>
      <div className="hidden md:block relative aspect-[2.4/1] w-full">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-background/30 md:from-background/90 md:via-background/40 md:to-background/20" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-10">
        <div className="flex flex-col gap-2 md:max-w-[60%]">
          <Badge variant="secondary" className="w-fit capitalize">
            {post.category}
          </Badge>
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground leading-tight">
              {post.title}
            </h2>
          </Link>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground line-clamp-2 md:line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6 md:h-7 md:w-7">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {post.author.name}
              </div>
            </div>
            <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
          </div>
          <div className="mt-3 md:mt-4">
            <Link
              href={`/blog/${post.slug}`}
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "rounded-full md:text-base md:px-5 md:py-2"
              )}
            >
              Read Article
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 