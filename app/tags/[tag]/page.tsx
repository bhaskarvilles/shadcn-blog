import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PostCard } from "@/components/post-card";
import { getPostsByTag } from "@/lib/blog-data";

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { tag } = resolvedParams;
  const decodedTag = decodeURIComponent(tag);
  
  return {
    title: `#${decodedTag} | Bhaskar's Blog`,
    description: `Explore all articles tagged with #${decodedTag} on Bhaskar's Blog.`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const resolvedParams = await params;
  const { tag } = resolvedParams;
  const decodedTag = decodeURIComponent(tag);
  
  const posts = await getPostsByTag(decodedTag);
  
  if (!posts || posts.length === 0) {
    notFound();
  }
  
  return (
    <LayoutWrapper>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col items-center text-center max-w-[50rem] mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            #{decodedTag}
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore all {posts.length} articles tagged with #{decodedTag}.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </LayoutWrapper>
  );
} 