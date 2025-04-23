import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate, truncate } from "@/lib/utils";
import { Post } from "@/lib/blog-data";

interface PostCardProps {
  post: Post;
  aspectRatio?: "portrait" | "square" | "video";
}

export function PostCard({ post, aspectRatio = "square" }: PostCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative">
        <Link href={`/blog/${post.slug}`}>
          <div className={`relative ${aspectRatio === "portrait" ? "aspect-[3/4]" : aspectRatio === "video" ? "aspect-video" : "aspect-square"}`}>
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-all hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </Link>
        <div className="absolute bottom-3 left-3">
          <Badge variant="secondary" className="capitalize text-xs">
            {post.category}
          </Badge>
        </div>
      </div>
      <CardHeader className="p-3 pb-0 sm:p-4 sm:pb-0">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          <h3 className="text-base sm:text-lg md:text-xl font-bold leading-tight tracking-tight">{post.title}</h3>
        </Link>
      </CardHeader>
      <CardContent className="p-3 sm:p-4 flex-grow">
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 sm:line-clamp-3">
          {truncate(post.excerpt, 120)}
        </p>
      </CardContent>
      <CardFooter className="p-3 pt-0 sm:p-4 sm:pt-0 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Avatar className="h-6 w-6 sm:h-7 sm:w-7">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-xs sm:text-sm text-muted-foreground">
            {post.author.name.split(' ')[0]}
          </div>
        </div>
        <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
          <Calendar className="mr-1 h-3 w-3" />
          <time dateTime={post.date}>{formatDate(post.date, true)}</time>
        </div>
      </CardFooter>
    </Card>
  );
} 