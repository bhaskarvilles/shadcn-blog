import { Metadata } from "next";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { PostCard } from "@/components/post-card";
import { getAllPosts } from "@/lib/blog-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Blog | Bhaskar's Blog",
  description: "Explore all articles on technology, travel, food, and lifestyle.",
};

export default async function BlogPage() {
  const allPosts = await getAllPosts();
  
  const categories = [
    { id: "all", label: "All" },
    { id: "programming", label: "Programming" },
    { id: "travel", label: "Travel" },
    { id: "food", label: "Food" },
    { id: "health", label: "Health" },
    { id: "science", label: "Science" },
    { id: "biotechnology", label: "Biotechnology" },
  ];

  return (
    <LayoutWrapper>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col items-center text-center max-w-[50rem] mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Blog
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore articles and insights on technology, travel, food, and more.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center my-6 overflow-x-auto pb-2">
            <TabsList className="inline-flex">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="capitalize">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allPosts
                  .filter((post) => 
                    post.category.toLowerCase() === category.id.toLowerCase()
                  )
                  .map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </LayoutWrapper>
  );
} 