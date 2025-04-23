import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Tag, ArrowLeft } from "lucide-react";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PostContent } from "@/components/post-content";
import { PostCard } from "@/components/post-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/lib/utils";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-data";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(
  { params }: BlogPostPageProps
): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  
  return {
    title: `${post.title} | Bhaskar's Blog`,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

// Helper function to check if we're in production Netlify environment
const isNetlifyProduction = () => {
  return process.env.NETLIFY === 'true' && process.env.CONTEXT === 'production';
};

// Function to fetch post data from Netlify function when in production
async function getPostData(slug: string) {
  if (isNetlifyProduction()) {
    try {
      // In production, use the API route
      const response = await fetch(`/api/posts/${slug}`);
      
      if (!response.ok) {
        return null;
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching post from API:', error);
      return null;
    }
  } else {
    // In development, use the normal data fetching
    return await getPostBySlug(slug);
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Use the new function to get post data
  const post = await getPostData(slug);
  
  if (!post) {
    notFound();
  }
  
  // Get related posts (always using the normal function for simplicity)
  const relatedPosts = await getRelatedPosts(post, 3);
  
  return (
    <LayoutWrapper>
      <article className="mx-auto max-w-4xl py-6">
        <div className="mb-8">
          <Button variant="ghost" size="sm" className="mb-6" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="capitalize">
                {post.category}
              </Badge>
              <span className="text-muted-foreground text-sm">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground">
              {post.excerpt}
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-8">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{post.author.name}</div>
              <div className="text-sm text-muted-foreground">
                {post.author.bio}
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>
        
        <div className="prose max-w-none mx-auto">
          <PostContent content={post.content} />
        </div>
        
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag: string) => (
            <Link key={tag} href={`/tags/${tag}`} passHref>
              <Badge variant="secondary" className="cursor-pointer">
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </Badge>
            </Link>
          ))}
        </div>
        
        <Separator className="my-12" />
        
        {relatedPosts.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}
      </article>
    </LayoutWrapper>
  );
} 