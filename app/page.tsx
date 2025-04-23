import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Clock, BookOpen, Star, Tag, Search, Award, Calendar, Bookmark, Layers, Hash, Flame } from "lucide-react";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { FeaturedPost } from "@/components/featured-post";
import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getFeaturedPosts, getRecentPosts } from "@/lib/blog-data";
import { Post } from "@/lib/blog-data";
import { cn } from "@/lib/utils";

export default async function Home() {
  const featuredPosts = await getFeaturedPosts();
  const allRecentPosts = await getRecentPosts(15); // Increased to get more posts
  const recentPosts = allRecentPosts.filter(post => !post.featured);

  // Get unique categories from recent posts for filtering
  const categories = ["all", ...new Set(recentPosts.map(post => post.category.toLowerCase()))];

  // Select some random categories for the "Discover" section
  const randomCategories = [...categories]
    .filter(cat => cat !== "all")
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.min(5, categories.length - 1));
    
  // Get popular posts (simulating by selecting some posts)
  const popularPosts = [...recentPosts]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
    
  // Get trending posts (simulating by selecting some posts)
  const trendingPosts = [...recentPosts]
    .filter(post => !popularPosts.includes(post))
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
    
  // Get posts for category showcase (choose 2-3 main categories)
  const mainCategories = categories
    .filter(cat => cat !== "all")
    .slice(0, Math.min(3, categories.length - 1));
    
  // Create a posts by category map
  const postsByCategory: Record<string, Post[]> = {};
  mainCategories.forEach(category => {
    postsByCategory[category] = recentPosts
      .filter(post => post.category.toLowerCase() === category)
      .slice(0, 4);
  });

  return (
    <LayoutWrapper fullWidth>
      {/* Blog Header Section */}
      <section className="py-8 border-b">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ram&apos;s <span className="text-primary">Website</span>
            </h1>
            <p className="text-muted-foreground mt-1">Decoding the intersection of technology, geopolitics, and human progress</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Search</span>
            </Button>
            <Button asChild size="sm">
              <Link href="/subscribe">Subscribe</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      {featuredPosts.length > 0 && (
        <section className="py-10">
          <div className="flex items-center gap-2 mb-5">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            <h2 className="text-2xl font-bold tracking-tight">Editor&apos;s Pick</h2>
          </div>
          <FeaturedPost post={featuredPosts[0]} />
        </section>
      )}
      
      {/* Trending Posts Section */}
      <section className="py-10 border-t">
        <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
          <Flame className="h-5 w-5 text-red-500" />
          Trending Now
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingPosts.map((post, idx) => (
            <Link 
              key={post.id}
              href={`/blog/${post.slug}`}
              className={cn(
                "group relative overflow-hidden rounded-xl border hover:shadow-md transition-all",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="aspect-video relative">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 p-4 text-white">
                <Badge className="bg-red-500 hover:bg-red-600 border-none mb-2">Trending #{idx + 1}</Badge>
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary/90 transition-colors">{post.title}</h3>
                <div className="flex items-center text-xs gap-2">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Content Discovery Section */}
      <section className="py-10 border-t border-b">
        <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Discover
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Trending Topics */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="rounded-xl border p-4 h-full bg-card hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4">Explore Topics</h3>
              <div className="flex flex-wrap gap-2">
                {randomCategories.map((category) => (
                  <Link key={category} href={`/category/${category}`}>
                    <Badge 
                      variant="secondary" 
                      className={cn(
                        "px-3 py-1 hover:bg-primary/10 transition-colors cursor-pointer capitalize",
                        "animate-fade-in"
                      )}
                      style={{ 
                        animationDelay: `${randomCategories.indexOf(category) * 100}ms`,
                        animationDuration: '0.6s'
                      }}
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {category}
                    </Badge>
                  </Link>
                ))}
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                {recentPosts.slice(0, 2).map((post, idx) => (
                  <Link 
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className={cn(
                      "group rounded-lg border p-3 hover:bg-muted/50 transition-colors",
                      "animate-slide-up"
                    )}
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <Badge variant="outline" className="mb-2 capitalize">{post.category}</Badge>
                    <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Reading Time Widget */}
          <div className="rounded-xl border p-5 bg-card hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Quick Reads
            </h3>
            <div className="space-y-4">
              {recentPosts.slice(2, 5).map((post, idx) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className={cn(
                    "flex items-start gap-3 group",
                    "animate-fade-in"
                  )}
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="h-14 w-14 relative rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {Math.ceil(post.content.length / 1000)} min read
                    </p>
                  </div>
                </Link>
              ))}
              <Link 
                href="/blog" 
                className="text-sm text-primary hover:underline flex items-center mt-4"
              >
                View more quick reads
                <ArrowRight className="h-3 w-3 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Posts Section */}
      <section className="py-10 border-b">
        <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          Popular Articles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
          {popularPosts.map((post, idx) => (
            <div 
              key={post.id}
              className={cn(
                "flex gap-4 group",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative h-24 w-24 md:h-32 md:w-32 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <Badge variant="outline" className="w-fit mb-2 capitalize">{post.category}</Badge>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="font-bold text-base md:text-lg mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-auto">
                  {post.excerpt.substring(0, 100)}...
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <span>•</span>
                  <span>{Math.ceil(post.content.length / 1000)} min read</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Articles with Category Filters */}
      <section className="py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Latest Articles
          </h2>
          <Link href="/blog" passHref>
            <Button variant="ghost" size="sm" className="gap-1 group">
              View All Articles <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-start overflow-x-auto pb-px">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="capitalize">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all" className="space-y-4 animate-fade-in" style={{ animationDuration: '0.5s' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.slice(0, 6).map((post, idx) => (
                <div 
                  key={post.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent 
              key={category} 
              value={category} 
              className="space-y-4 animate-fade-in" 
              style={{ animationDuration: '0.5s' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPosts
                  .filter((post) => post.category.toLowerCase() === category)
                  .map((post, idx) => (
                    <div 
                      key={post.id}
                      className="animate-slide-up"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <PostCard post={post} />
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
      
      {/* Category Showcase Sections */}
      {mainCategories.map((category) => (
        <section key={category} className="py-10 border-t">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2 capitalize">
              <Hash className="h-5 w-5 text-primary" />
              {category}
            </h2>
            <Link href={`/category/${category}`}>
              <Button variant="outline" size="sm" className="gap-1">
                More in {category} <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {postsByCategory[category]?.map((post, idx: number) => (
              <div
                key={post.id}
                className="animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-medium text-base line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
      
      {/* Reading List Section */}
      <section className="py-10 border-t">
        <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
          <Bookmark className="h-5 w-5 text-primary" />
          Add to Your Reading List
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-3 bg-muted/50 rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-3">Topics Worth Exploring</h3>
            <p className="text-muted-foreground mb-4">
              Curated selection of our most insightful articles across various topics.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recentPosts.slice(6, 10).map((post, idx) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className={cn(
                    "p-3 rounded-lg border bg-card hover:bg-muted/50 group",
                    "animate-fade-in"
                  )}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <Badge variant="outline" className="capitalize mb-2">{post.category}</Badge>
                  <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{Math.ceil(post.content.length / 1000)} min read</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-xl border p-5 bg-gradient-to-br from-primary/5 to-transparent">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Layers className="h-4 w-4 text-primary" />
                Collections
              </h3>
              
              <div className="space-y-3">
                {randomCategories.slice(0, 3).map((category, idx) => (
                  <Link 
                    key={category}
                    href={`/category/${category}`}
                    className={cn(
                      "flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-primary/5 transition-colors",
                      "animate-fade-in"
                    )}
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <span className="font-medium capitalize">{category}</span>
                    <Badge variant="outline">
                      {recentPosts.filter(p => p.category.toLowerCase() === category).length} articles
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-10 border-t">
        <div className="bg-gradient-to-r from-primary/10 to-background rounded-xl p-6 md:p-10 relative overflow-hidden">
          <div className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h2 className="text-2xl font-bold tracking-tight">
                Stay Updated
              </h2>
              <p className="text-muted-foreground">
                Get notified about new articles and updates. No spam, unsubscribe anytime.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <Button asChild size="lg" className="w-full md:w-auto rounded-full">
                <Link href="/subscribe">Subscribe Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
