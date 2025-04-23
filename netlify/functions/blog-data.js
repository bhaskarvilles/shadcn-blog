// Simplified blog data for Netlify serverless functions
const getGravatarUrl = (email, size = 80) => {
  const md5 = require('crypto').createHash('md5').update(email.toLowerCase().trim()).digest('hex');
  return `https://www.gravatar.com/avatar/${md5}?s=${size}&d=mp`;
};

// Sample authors and posts
const authors = [
  {
    id: "1",
    name: "Bhaskar Ram",
    avatar: getGravatarUrl("bhaskarvilles@gmail.com", 400),
    bio: "Tech Analyst & Geopolitical Observer"
  },
  {
    id: "2",
    name: "Ananya Singh",
    avatar: getGravatarUrl("ananya@example.com", 400),
    bio: "Travel blogger and photographer with a love for nature and adventure."
  },
  {
    id: "3",
    name: "Rahul Sharma",
    avatar: getGravatarUrl("rahul@example.com", 400),
    bio: "Foodie and culinary expert who loves exploring different cuisines."
  }
];

// Sample posts (built-in content)
const samplePosts = [
  {
    id: "1",
    title: "Getting Started with Next.js 15 and Shadcn UI",
    slug: "getting-started-with-nextjs-15-and-shadcn-ui",
    content: "# Getting Started with Next.js 15 and Shadcn UI\n\nNext.js 15 introduces exciting features...",
    excerpt: "Learn how to get started with Next.js 15 and Shadcn UI to build beautiful, accessible web applications.",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop",
    date: "2023-09-01T09:00:00.000Z",
    author: authors[0],
    category: "programming",
    tags: ["nextjs", "react", "ui", "web development"],
    featured: true
  },
  {
    id: "2",
    title: "10 Must-Visit Destinations in India",
    slug: "10-must-visit-destinations-in-india",
    content: "# 10 Must-Visit Destinations in India\n\nIndia, with its rich cultural heritage...",
    excerpt: "Discover the most breathtaking destinations across India, from the iconic Taj Mahal to the serene backwaters of Kerala.",
    coverImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=450&fit=crop",
    date: "2023-08-15T10:30:00.000Z",
    author: authors[1],
    category: "travel",
    tags: ["travel", "india", "destinations", "tourism"],
    featured: true
  },
  {
    id: "3",
    title: "Mastering the Art of Indian Cuisine",
    slug: "mastering-the-art-of-indian-cuisine",
    content: "# Mastering the Art of Indian Cuisine\n\nIndian cuisine is renowned worldwide...",
    excerpt: "Explore the rich flavors and techniques of Indian cooking, from spice selection to regional specialties.",
    coverImage: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=450&fit=crop",
    date: "2023-07-20T15:45:00.000Z",
    author: authors[2],
    category: "food",
    tags: ["cooking", "food", "india", "cuisine", "recipes"],
    featured: false
  }
];

// Function to get all posts
const getAllPosts = async () => {
  return samplePosts;
};

// Function to get post by slug
const getPostBySlug = async (slug) => {
  return samplePosts.find(post => post.slug === slug);
};

// Function to get featured posts
const getFeaturedPosts = async () => {
  return samplePosts.filter(post => post.featured);
};

// Function to get posts by category
const getPostsByCategory = async (category) => {
  return samplePosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

// Function to get posts by tag
const getPostsByTag = async (tag) => {
  return samplePosts.filter(post => post.tags.includes(tag));
};

// Function to get recent posts
const getRecentPosts = async (count = 3) => {
  return samplePosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

// Function to get related posts
const getRelatedPosts = async (currentPost, count = 2) => {
  return samplePosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
};

module.exports = {
  getPostBySlug,
  getAllPosts,
  getFeaturedPosts,
  getPostsByCategory,
  getPostsByTag,
  getRecentPosts,
  getRelatedPosts
}; 