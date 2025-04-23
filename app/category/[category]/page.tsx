import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PostCard } from "@/components/post-card";
import { getPostsByCategory } from "@/lib/blog-data";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { category } = resolvedParams;
  const decodedCategory = decodeURIComponent(category);
  const formattedCategory = decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1);
  
  return {
    title: `${formattedCategory} | Bhaskar's Blog`,
    description: `Explore all articles about ${formattedCategory.toLowerCase()} on Bhaskar's Blog.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const { category } = resolvedParams;
  const decodedCategory = decodeURIComponent(category);
  const formattedCategory = decodedCategory.charAt(0).toUpperCase() + decodedCategory.slice(1);
  
  const posts = await getPostsByCategory(decodedCategory);
  
  if (!posts || posts.length === 0) {
    notFound();
  }
  
  return (
    <LayoutWrapper>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col items-center text-center max-w-[50rem] mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            {formattedCategory}
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore all {posts.length} articles about {formattedCategory.toLowerCase()}.
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