#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Utility function for Gravatar URLs (same as in blog-data.js)
const getGravatarUrl = (email, size = 80) => {
  const crypto = require('crypto');
  const md5 = crypto.createHash('md5').update(email.toLowerCase().trim()).digest('hex');
  return `https://www.gravatar.com/avatar/${md5}?s=${size}&d=mp`;
};

// Authors data
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

// Sample blog posts - same data as in blog-data.js
const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Next.js 15 and Shadcn UI",
    slug: "getting-started-with-nextjs-15-and-shadcn-ui",
    content: "# Getting Started with Next.js 15 and Shadcn UI\n\nNext.js 15 introduces a number of exciting new features that make building modern web applications even more enjoyable and efficient. Combined with the beautiful, accessible components from Shadcn UI, you have a powerful toolkit for creating stunning websites.\n\n## What's New in Next.js 15?\n\nNext.js 15 brings several improvements to the developer experience:\n\n- **Improved Performance**: Faster builds and renders\n- **Enhanced Routing**: Simplified file-based routing with more features\n- **Server Components**: Better server-side rendering capabilities\n- **Turbopack**: Faster development server\n\n## Why Shadcn UI?\n\nShadcn UI isn't a traditional component library. Instead, it provides a collection of reusable components that you can copy and paste into your projects:\n\n- No installation or import from npm\n- Fully customizable components\n- Built with Radix UI and Tailwind CSS\n- Accessible and responsive by default",
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
    content: "# 10 Must-Visit Destinations in India\n\nIndia, with its rich cultural heritage, diverse landscapes, and vibrant traditions, offers countless destinations for travelers. Here are ten places you absolutely must visit when exploring this incredible country.\n\n## 1. Taj Mahal, Agra\n\nThe iconic Taj Mahal needs no introduction. This magnificent marble mausoleum, built by Emperor Shah Jahan in memory of his beloved wife, stands as a testament to eternal love and architectural brilliance.\n\n## 2. Varanasi, Uttar Pradesh\n\nOne of the oldest continuously inhabited cities in the world, Varanasi is the spiritual heart of India. The ghats along the Ganges River offer a glimpse into Hindu rituals and traditions.",
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
    content: "# Mastering the Art of Indian Cuisine\n\nIndian cuisine is renowned worldwide for its bold flavors, aromatic spices, and diverse regional variations. From the fiery curries of the south to the rich, creamy dishes of the north, Indian food offers something for every palate.\n\n## The Spice Foundation\n\nAt the heart of Indian cooking lies a masterful use of spices. Here are some essential spices to have in your pantry:\n\n- **Turmeric**: Adds color and earthy flavor\n- **Cumin**: Provides warmth and depth\n- **Coriander**: Offers citrusy notes\n- **Cardamom**: Gives a sweet, aromatic quality\n- **Garam Masala**: A complex spice blend used to finish dishes",
    excerpt: "Explore the rich flavors and techniques of Indian cooking, from spice selection to regional specialties.",
    coverImage: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=450&fit=crop",
    date: "2023-07-20T15:45:00.000Z",
    author: authors[2],
    category: "food",
    tags: ["cooking", "food", "india", "cuisine", "recipes"],
    featured: false
  }
];

// Format date helper
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

// HTML template for blog posts
const generatePostHtml = (post) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${post.title} | Bhaskar's Blog</title>
  <meta name="description" content="${post.excerpt}">
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css">
</head>
<body class="bg-gray-100">
  <header class="bg-white shadow-md py-4">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <a href="/" class="text-xl font-bold text-gray-800">Bhaskar's Blog</a>
      <nav>
        <ul class="flex space-x-4">
          <li><a href="/" class="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="/blog" class="text-gray-600 hover:text-gray-900">Blog</a></li>
          <li><a href="/contact" class="text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <main class="container mx-auto px-4 py-8">
    <article class="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div class="p-8">
        <div class="flex items-center text-sm text-gray-600 mb-4">
          <span class="bg-gray-200 rounded-full px-3 py-1 mr-2">${post.category}</span>
          <span>${formatDate(post.date)}</span>
        </div>
        
        <h1 class="text-3xl font-bold text-gray-900 mb-4">${post.title}</h1>
        
        <p class="text-gray-700 text-lg mb-6">${post.excerpt}</p>
        
        <div class="flex items-center mb-8">
          <img 
            src="${post.author.avatar}" 
            alt="${post.author.name}" 
            class="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p class="font-medium text-gray-900">${post.author.name}</p>
            <p class="text-gray-600 text-sm">${post.author.bio}</p>
          </div>
        </div>
        
        <div class="mb-8">
          <img 
            src="${post.coverImage}" 
            alt="${post.title}" 
            class="w-full h-auto rounded-lg"
          />
        </div>
        
        <div class="prose max-w-none markdown-body">
          ${marked(post.content)}
        </div>
        
        <div class="mt-8 flex flex-wrap gap-2">
          ${post.tags.map(tag => `
            <a href="/tags/${tag}" class="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
              #${tag}
            </a>
          `).join('')}
        </div>
      </div>
    </article>
  </main>
  
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4 text-center">
      <p>&copy; ${new Date().getFullYear()} Bhaskar's Blog. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`;
};

// Create output directory if it doesn't exist
const outputDir = path.join(__dirname, '..', 'public', 'blog');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Created directory: ${outputDir}`);
}

// Generate HTML files for each blog post
blogPosts.forEach(post => {
  const postHtml = generatePostHtml(post);
  const filePath = path.join(outputDir, `${post.slug}.html`);
  
  fs.writeFileSync(filePath, postHtml);
  console.log(`Generated: ${filePath}`);
});

console.log('All blog post pages generated successfully!'); 