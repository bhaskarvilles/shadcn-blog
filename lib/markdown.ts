import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, Author, authors } from './blog-data';

// Define the path to your markdown files
const POSTS_DIRECTORY = process.env.MARKDOWN_POSTS_DIRECTORY || path.join(process.cwd(), 'content/posts');

// Default category images for fallback
const categoryImages: Record<string, string> = {
  "programming": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=450&fit=crop",
  "ai": "https://images.unsplash.com/photo-1677442136019-21780ecad662?w=800&h=450&fit=crop",
  "technology": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=450&fit=crop",
  "travel": "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&h=450&fit=crop",
  "food": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=450&fit=crop",
  "health": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=450&fit=crop",
  "science": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&h=450&fit=crop",
  "biotechnology": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=450&fit=crop",
  "default": "https://images.unsplash.com/photo-1468779036391-52341f60b55d?w=800&h=450&fit=crop"
};

export interface MarkdownPost {
  title: string;
  slug: string;
  date: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: Author;
  category: string;
  tags: string[];
  featured?: boolean;
}

// Function to validate if a URL is valid
function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export async function getMarkdownPosts(): Promise<Post[]> {
  // Check if the directory exists
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    console.warn(`Markdown posts directory not found at ${POSTS_DIRECTORY}`);
    return [];
  }

  // Get all markdown files from the directory
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);
  const markdownFiles = fileNames.filter(fileName => fileName.endsWith('.md'));
  
  // Parse each markdown file and convert to Post format
  const posts = markdownFiles.map((fileName, index) => {
    // Read the markdown file
    const filePath = path.join(POSTS_DIRECTORY, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Parse the frontmatter
    const { data, content } = matter(fileContents);
    
    // Generate a slug from the filename if not provided in frontmatter
    const slug = data.slug || fileName.replace(/\.md$/, '');
    
    // Find author or use a default
    let postAuthor = authors.find(author => 
      author.name.toLowerCase() === (data.author?.toLowerCase() || '')
    );
    
    if (!postAuthor) {
      postAuthor = authors[0]; // Default to first author
    }

    // Extract excerpt from content if not provided
    let excerpt = data.description || '';
    if (!excerpt && content) {
      // Remove markdown formatting and get first 150 characters
      excerpt = content
        .replace(/#{1,6}\s+/g, '') // Remove headings
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Replace links with just text
        .replace(/!\[([^\]]+)\]\([^)]+\)/g, '') // Remove images
        .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
        .replace(/\*([^*]+)\*/g, '$1') // Remove italic
        .replace(/`([^`]+)`/g, '$1') // Remove code
        .replace(/```[\s\S]*?```/g, '') // Remove code blocks
        .replace(/\n/g, ' ').trim() // Replace newlines with spaces
        .substring(0, 150);
    }

    // Determine the category
    const category = Array.isArray(data.categories) ? data.categories[0] : (data.categories || 'Uncategorized');

    // Determine the cover image with validation
    let coverImage = 'https://placehold.co/800x450';
    
    // Check if we have images in frontmatter
    if (data.images && Array.isArray(data.images) && data.images.length > 0) {
      // Find the first valid URL
      for (const img of data.images) {
        if (img && isValidURL(img)) {
          coverImage = img;
          break;
        }
      }
    }
    
    // If no valid image found, use category-based image
    if (coverImage === 'https://placehold.co/800x450') {
      const categoryKey = category.toLowerCase();
      coverImage = categoryImages[categoryKey] || categoryImages.default;
    }

    // Create the post object with a unique ID (100+ to avoid conflicts with sample posts)
    return {
      id: `md-${index + 100}`,
      title: data.title || 'Untitled Post',
      slug: slug,
      content: content,
      excerpt: excerpt,
      coverImage: coverImage,
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      author: postAuthor,
      category: category,
      tags: Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : []),
      featured: !!data.featured,
    };
  });

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
} 