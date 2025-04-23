const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Define the path to your markdown files
const POSTS_DIRECTORY = path.join(process.cwd(), 'content/posts');

// Define category placeholders for cover images
const categoryImages = {
  "programming": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=450&fit=crop",
  "ai": "https://images.unsplash.com/photo-1677442136019-21780ecad662?w=800&h=450&fit=crop",
  "technology": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=450&fit=crop",
  "travel": "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&h=450&fit=crop",
  "food": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=450&fit=crop",
  "health": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=450&fit=crop",
  "science": "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&h=450&fit=crop",
  "biotechnology": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=450&fit=crop",
  "finance": "https://images.unsplash.com/photo-1638913662539-46e7ccd6d912?w=800&h=450&fit=crop",
  "business": "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=800&h=450&fit=crop",
  "cybersecurity": "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=800&h=450&fit=crop",
  "news": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=450&fit=crop",
  "politics": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&h=450&fit=crop",
  "web development": "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=800&h=450&fit=crop",
  "data science": "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=450&fit=crop",
  "neural networks": "https://images.unsplash.com/photo-1580894732930-0babd100d356?w=800&h=450&fit=crop",
  "innovation": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop",
  "entrepreneurship": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=450&fit=crop",
  "startups": "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=450&fit=crop",
  "default": "https://images.unsplash.com/photo-1468779036391-52341f60b55d?w=800&h=450&fit=crop"
};

// Map old categories to new consistent ones
const categoryMapping = {
  "AI": "ai",
  "Neural Networks": "ai",
  "OpenAI": "ai",
  "ChatGPT": "ai",
  "Technology": "technology",
  "Programming": "programming",
  "Data Science": "data science",
  "Web Development": "web development",
  "Cybersecurity": "cybersecurity",
  "Travel": "travel",
  "Food": "food",
  "Health": "health",
  "Science": "science",
  "Biotechnology": "biotechnology",
  "Finance": "finance",
  "Business": "business",
  "News": "news",
  "Politics": "politics",
  "Innovation": "innovation",
  "Entrepreneurship": "entrepreneurship",
  "Startups": "startups"
};

// Function to validate if a URL is valid
function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

// Update all markdown files
async function updateMarkdownFiles() {
  // Get all markdown files from the directory
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);
  const markdownFiles = fileNames.filter(fileName => fileName.endsWith('.md'));
  
  let updatedCount = 0;
  
  for (const fileName of markdownFiles) {
    try {
      // Read the markdown file
      const filePath = path.join(POSTS_DIRECTORY, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      
      // Parse the frontmatter
      const { data, content } = matter(fileContents);

      // Generate a slug from the filename if not provided in frontmatter
      const slug = data.slug || fileName.replace(/\.md$/, '');
      
      // Extract date from filename or front matter
      let date = data.date;
      if (!date) {
        const dateMatch = fileName.match(/^(\d{4}-\d{2}-\d{2})/);
        if (dateMatch) {
          date = new Date(dateMatch[1]).toISOString().split('T')[0];
        } else {
          date = new Date().toISOString().split('T')[0];
        }
      }
      
      // If date is a Date object, convert to string
      if (date instanceof Date) {
        date = date.toISOString().split('T')[0];
      }
      
      // Format categories
      let categories = data.categories || data.category || ["Uncategorized"];
      if (typeof categories === 'string') {
        categories = [categories];
      }
      
      // Map categories to consistent ones
      const mappedCategories = categories.map(cat => {
        const normalizedCat = typeof cat === 'string' ? cat.trim() : 'Uncategorized';
        return categoryMapping[normalizedCat] || normalizedCat.toLowerCase();
      });
      
      // Ensure we have at least one category
      if (mappedCategories.length === 0) {
        mappedCategories.push("uncategorized");
      }
      
      // Format tags
      let tags = data.tags || [];
      if (typeof tags === 'string') {
        tags = [tags];
      }
      
      // Add author
      const author = data.author || "Bhaskar Ram";
      
      // Add description/excerpt
      const description = data.description || data.excerpt || extractExcerpt(content);
      
      // Add cover image
      let images = data.images || [];
      if (typeof images === 'string') {
        images = [images];
      }
      
      // Validate image URLs and filter out invalid ones
      images = images.filter(img => {
        if (!img) return false;
        return isValidURL(img);
      });
      
      // If no valid images remain, add a default based on category
      if (images.length === 0) {
        const primaryCategory = mappedCategories[0].toLowerCase();
        const imageUrl = categoryImages[primaryCategory] || categoryImages["default"];
        images = [imageUrl];
      }
      
      // Set featured status
      const featured = !!data.featured;
      
      // Create updated frontmatter
      const updatedData = {
        title: data.title || "Untitled Post",
        date: date,
        author: author,
        authorlink: data.authorlink || "",
        categories: mappedCategories,
        tags: tags,
        description: description,
        images: images,
        featured: featured
      };
      
      // Remove empty fields
      Object.keys(updatedData).forEach(key => {
        if (updatedData[key] === "" || 
            (Array.isArray(updatedData[key]) && updatedData[key].length === 0)) {
          delete updatedData[key];
        }
      });
      
      // Create new file content with updated frontmatter
      const updatedFileContent = matter.stringify(content, updatedData);
      
      // Write the file
      fs.writeFileSync(filePath, updatedFileContent, 'utf8');
      
      updatedCount++;
      console.log(`Updated ${fileName}`);
    } catch (error) {
      console.error(`Error updating ${fileName}:`, error);
    }
  }
  
  console.log(`Successfully updated ${updatedCount} markdown files.`);
}

// Helper function to extract excerpt from content
function extractExcerpt(content) {
  // Remove markdown formatting and get first 150 characters
  return content
    .replace(/#{1,6}\s+/g, '') // Remove headings
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Replace links with just text
    .replace(/!\[([^\]]+)\]\([^)]+\)/g, '') // Remove images
    .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
    .replace(/\*([^*]+)\*/g, '$1') // Remove italic
    .replace(/`([^`]+)`/g, '$1') // Remove code
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/\n/g, ' ').trim() // Replace newlines with spaces
    .substring(0, 150) + '...';
}

// Run the function
updateMarkdownFiles(); 