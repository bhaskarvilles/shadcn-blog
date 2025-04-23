import { getGravatarUrl } from "./utils";

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: Author;
  category: string;
  tags: string[];
  featured?: boolean;
}

export const authors: Author[] = [
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
export const samplePosts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 15 and Shadcn UI",
    slug: "getting-started-with-nextjs-15-and-shadcn-ui",
    content: `
# Getting Started with Next.js 15 and Shadcn UI

Next.js 15 introduces a number of exciting new features that make building modern web applications even more enjoyable and efficient. Combined with the beautiful, accessible components from Shadcn UI, you have a powerful toolkit for creating stunning websites.

## What's New in Next.js 15?

Next.js 15 brings several improvements to the developer experience:

- **Improved Performance**: Faster builds and renders
- **Enhanced Routing**: Simplified file-based routing with more features
- **Server Components**: Better server-side rendering capabilities
- **Turbopack**: Faster development server

## Why Shadcn UI?

Shadcn UI isn't a traditional component library. Instead, it provides a collection of reusable components that you can copy and paste into your projects:

- No installation or import from npm
- Fully customizable components
- Built with Radix UI and Tailwind CSS
- Accessible and responsive by default

## Setting Up Your Project

Here's how to get started with a new project:

\`\`\`bash
npx create-next-app@latest my-blog --typescript --tailwind --eslint
\`\`\`

Then, follow the Shadcn UI installation:

\`\`\`bash
npx shadcn-ui@latest init
\`\`\`

## Building Your First Component

Let's create a simple card component:

\`\`\`tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function PostCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Blog Post</CardTitle>
        <CardDescription>Published on May 7, 2023</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the content of my blog post...</p>
      </CardContent>
      <CardFooter>
        <p>Read more →</p>
      </CardFooter>
    </Card>
  );
}
\`\`\`

## Conclusion

Next.js 15 and Shadcn UI make a powerful combination for building modern web applications. Start exploring and creating your next project today!
    `,
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
    content: `
# 10 Must-Visit Destinations in India

India, with its rich cultural heritage, diverse landscapes, and vibrant traditions, offers countless destinations for travelers. Here are ten places you absolutely must visit when exploring this incredible country.

## 1. Taj Mahal, Agra

The iconic Taj Mahal needs no introduction. This magnificent marble mausoleum, built by Emperor Shah Jahan in memory of his beloved wife, stands as a testament to eternal love and architectural brilliance.

## 2. Varanasi, Uttar Pradesh

One of the oldest continuously inhabited cities in the world, Varanasi is the spiritual heart of India. The ghats along the Ganges River offer a glimpse into Hindu rituals and traditions.

## 3. Jaipur, Rajasthan

Known as the "Pink City," Jaipur is famous for its stunning palaces, forts, and vibrant markets. The Hawa Mahal, City Palace, and Amber Fort are must-visit attractions.

## 4. Kerala Backwaters

The serene backwaters of Kerala offer a peaceful retreat. Cruise on a traditional houseboat through interconnected canals, lakes, and rivers while enjoying the lush green surroundings.

## 5. Darjeeling, West Bengal

Nestled in the Himalayan foothills, Darjeeling is famous for its tea plantations and panoramic views of the mountains, including the majestic Kanchenjunga.

## 6. Goa Beaches

Goa's pristine beaches, vibrant nightlife, and Portuguese-influenced architecture make it a favorite among both Indian and international travelers.

## 7. Ladakh, Jammu and Kashmir

With its dramatic landscapes, Buddhist monasteries, and high-altitude lakes, Ladakh offers a unique cultural and natural experience unlike anywhere else in India.

## 8. Hampi, Karnataka

The ancient ruins of Hampi, a UNESCO World Heritage Site, transport visitors back to the grandeur of the Vijayanagara Empire with its temples, monuments, and boulders.

## 9. Amritsar, Punjab

Home to the Golden Temple (Harmandir Sahib), Amritsar is the spiritual center for Sikhs. The temple's golden dome reflecting in the surrounding water creates a mesmerizing sight.

## 10. Andaman Islands

With crystal-clear waters, coral reefs, and pristine beaches, the Andaman Islands offer excellent opportunities for snorkeling, scuba diving, and simply relaxing in paradise.

## Planning Your Trip

The best time to visit India varies by region due to the diverse climate. Generally, October to March is considered the most pleasant period for most parts of the country.

Remember to respect local customs, dress modestly when visiting religious sites, and always ask permission before photographing people.

## Conclusion

India's diversity ensures that every traveler finds something to love. Whether you're seeking spiritual enlightenment, architectural wonders, natural beauty, or culinary delights, these ten destinations will provide unforgettable experiences.
    `,
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
    content: `
# Mastering the Art of Indian Cuisine

Indian cuisine is renowned worldwide for its bold flavors, aromatic spices, and diverse regional variations. From the fiery curries of the south to the rich, creamy dishes of the north, Indian food offers something for every palate.

## The Spice Foundation

At the heart of Indian cooking lies a masterful use of spices. Here are some essential spices to have in your pantry:

- **Turmeric**: Adds color and earthy flavor
- **Cumin**: Provides warmth and depth
- **Coriander**: Offers citrusy notes
- **Cardamom**: Gives a sweet, aromatic quality
- **Garam Masala**: A complex spice blend used to finish dishes

## Regional Cuisines

India's vast geography contributes to its culinary diversity:

### North Indian Cuisine

Characterized by rich, creamy gravies, tandoor-cooked breads, and meat dishes. Famous examples include butter chicken, naan, and biryani.

### South Indian Cuisine

Features rice-based dishes, coconut, and fiery spices. Dosas, idlis, and sambhar are staples.

### East Indian Cuisine

Known for fish dishes, mustard, and sweet desserts. Bengali fish curry and rasgulla are popular.

### West Indian Cuisine

Includes Gujarati vegetarian food and Goan seafood dishes with Portuguese influences.

## Essential Techniques

Mastering these techniques will elevate your Indian cooking:

### Tadka (Tempering)

Heating spices in oil or ghee to release flavors before adding them to a dish.

### Bhunao (Slow Roasting)

Slowly cooking ingredients until the oil separates, intensifying flavors.

### Dum Cooking

Slow-cooking in a sealed container to allow flavors to develop.

## Beginner-Friendly Recipe: Chana Masala

Here's a simple recipe to get you started:

### Ingredients:
- 2 cans chickpeas, drained
- 1 onion, finely chopped
- 2 tomatoes, pureed
- 2 cloves garlic, minced
- 1-inch ginger, grated
- 1 green chili, sliced
- 1 tsp cumin seeds
- 1 tsp coriander powder
- 1/2 tsp turmeric
- 1/2 tsp red chili powder
- 1 tsp garam masala
- 2 tbsp oil
- Salt to taste
- Fresh cilantro for garnish

### Method:
1. Heat oil in a pan. Add cumin seeds and let them splutter.
2. Add onions and cook until golden brown.
3. Add garlic, ginger, and green chili. Sauté for 2 minutes.
4. Add tomato puree and cook until oil separates.
5. Add all dry spices and salt. Mix well.
6. Add chickpeas and 1 cup water. Simmer for 15 minutes.
7. Garnish with cilantro and serve with rice or naan.

## Pairing with Beverages

- **Lassi**: Yogurt-based drink that complements spicy dishes
- **Masala Chai**: Spiced tea perfect with snacks
- **Indian Beer**: Such as Kingfisher, pairs well with tandoori dishes

## Conclusion

Mastering Indian cuisine takes practice, but starting with understanding spices and basic techniques will set you on the path to creating authentic, delicious dishes at home. Embrace the diversity of regional flavors and don't be afraid to adjust spice levels to your preference.

Remember, Indian cooking is as much about soul as it is about technique. Cook with love and your dishes will surely impress!
    `,
    excerpt: "Learn the secrets to authentic Indian cooking, from essential spices to regional variations and cooking techniques.",
    coverImage: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&h=450&fit=crop",
    date: "2023-07-20T14:45:00.000Z",
    author: authors[2],
    category: "food",
    tags: ["food", "cooking", "indian", "recipes", "cuisine"],
    featured: false
  },
  {
    id: "4",
    title: "Building Accessible Web Applications",
    slug: "building-accessible-web-applications",
    content: `
# Building Accessible Web Applications

Web accessibility is not just a nice-to-have feature—it's a necessity. Creating accessible web applications ensures that people with disabilities can perceive, understand, navigate, and interact with your website effectively.

## Why Accessibility Matters

- **Inclusivity**: Ensures everyone can use your application, regardless of abilities
- **Legal Compliance**: Many countries have laws requiring digital accessibility
- **Better UX for Everyone**: Accessibility improvements often benefit all users
- **SEO Benefits**: Many accessibility practices improve search engine ranking

## Key Accessibility Guidelines: WCAG

The Web Content Accessibility Guidelines (WCAG) provide a framework for making web content accessible, organized around four principles:

### 1. Perceivable

Information must be presentable to users in ways they can perceive.

- Provide text alternatives for non-text content
- Create captions and alternatives for multimedia
- Make content adaptable to different presentations
- Ensure content is distinguishable with good color contrast

### 2. Operable

User interface components must be operable by all users.

- Make all functionality available from a keyboard
- Give users enough time to read and use content
- Avoid content that could cause seizures
- Provide ways to help users navigate and find content

### 3. Understandable

Information and operation must be understandable.

- Make text readable and understandable
- Make content appear and operate in predictable ways
- Help users avoid and correct mistakes

### 4. Robust

Content must be robust enough to work with current and future technologies.

- Maximize compatibility with current and future tools

## Practical Implementation with React and Next.js

Here are some practical ways to implement accessibility in your Next.js applications:

### Semantic HTML

Use semantic HTML elements to provide meaning to your content:

\`\`\`jsx
// Bad
<div className="button" onClick={handleClick}>Submit</div>

// Good
<button onClick={handleClick}>Submit</button>
\`\`\`

### ARIA Attributes

When HTML semantics aren't enough, use ARIA attributes:

\`\`\`jsx
<div 
  role="alert" 
  aria-live="assertive"
>
  Form submitted successfully!
</div>
\`\`\`

### Keyboard Navigation

Ensure all interactive elements can be accessed and operated via keyboard:

\`\`\`jsx
const Modal = ({ isOpen, onClose, children }) => {
  // Trap focus inside the modal when open
  useEffect(() => {
    if (isOpen) {
      // Focus trap implementation
    }
    
    // Close on Escape key
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);
  
  return isOpen ? (
    <div role="dialog" aria-modal="true">
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  ) : null;
};
\`\`\`

### Color Contrast

Ensure sufficient color contrast between text and background:

\`\`\`css
/* Poor contrast */
.bad-example {
  color: #aaaaaa;
  background-color: #ffffff;
}

/* Good contrast (4.5:1 ratio or better) */
.good-example {
  color: #595959;
  background-color: #ffffff;
}
\`\`\`

### Testing Tools

Use these tools to audit your application's accessibility:

- **Automated Testing**: Use tools like Lighthouse, axe, or WAVE
- **Screen Reader Testing**: Test with NVDA, JAWS, or VoiceOver
- **Keyboard Navigation Testing**: Navigate your site using only the keyboard

## Conclusion

Building accessible web applications is not just the right thing to do—it's good for business, improves user experience for everyone, and helps future-proof your application. By following WCAG guidelines and implementing the practical techniques outlined here, you can create applications that truly work for all users.

Remember, accessibility is not a one-time effort but an ongoing process. Regular testing and refinement are key to maintaining an accessible web application.
    `,
    excerpt: "Learn how to create web applications that are accessible to all users, including those with disabilities.",
    coverImage: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&h=450&fit=crop",
    date: "2023-06-18T11:20:00.000Z",
    author: authors[0],
    category: "programming",
    tags: ["accessibility", "web development", "inclusivity", "a11y", "programming"],
    featured: false
  },
  {
    id: "5",
    title: "The Rise of Mindfulness in Modern Life",
    slug: "the-rise-of-mindfulness-in-modern-life",
    content: `
# The Rise of Mindfulness in Modern Life

In our fast-paced, constantly connected world, mindfulness has emerged as a powerful antidote to the stress and fragmentation of modern life. This ancient practice, with roots in Buddhist meditation, has found its way into mainstream culture, healthcare, education, and even the corporate world.

## What is Mindfulness?

At its core, mindfulness is the practice of paying attention to the present moment with openness, curiosity, and without judgment. It involves:

- **Present-moment awareness**: Fully engaging with what's happening right now
- **Non-judgment**: Observing thoughts and feelings without labeling them good or bad
- **Acceptance**: Acknowledging reality as it is, even when it's uncomfortable
- **Intention**: Deliberately choosing where to direct your attention

## The Science Behind Mindfulness

Research on mindfulness has exploded in recent years, with compelling findings about its benefits:

### Neurological Changes

Studies using MRI scans have shown that mindfulness meditation can actually change the structure and function of the brain:

- **Increased gray matter**: Particularly in areas related to learning, memory, and emotion regulation
- **Reduced activity in the default mode network**: The brain's "mind-wandering" mode associated with rumination and unhappiness
- **Enhanced connectivity**: Between brain regions involved in attention and executive function

### Psychological Benefits

Regular mindfulness practice has been shown to:

- Reduce symptoms of anxiety and depression
- Improve emotion regulation
- Enhance focus and attention
- Boost working memory
- Decrease rumination and worry

### Physical Health Improvements

Mindfulness can also impact physical health by:

- Lowering blood pressure
- Reducing chronic pain
- Improving sleep quality
- Strengthening immune function
- Reducing stress hormones like cortisol

## Mindfulness in Daily Life

You don't need to meditate for hours to incorporate mindfulness into your routine. Here are some accessible practices:

### Mindful Breathing (5 minutes)

1. Sit comfortably and close your eyes
2. Focus your attention on your breath
3. Notice the sensation of breathing—the rise and fall of your chest or the feeling of air at your nostrils
4. When your mind wanders (and it will), gently bring your attention back to your breath
5. Continue for five minutes

### Mindful Walking

1. Walk at a normal or slightly slower pace
2. Pay attention to the sensations in your feet and legs
3. Notice the movement of your body and the environment around you
4. When your mind wanders, return your attention to the walking experience

### Mindful Eating

1. Look at your food, noticing colors and textures
2. Smell your food before tasting
3. Take small bites and chew slowly
4. Notice flavors, textures, and the experience of eating
5. Put down utensils between bites

## Mindfulness in the Digital Age

Our technology-saturated environment presents unique challenges for staying present. Some strategies for digital mindfulness include:

- **Tech boundaries**: Designate tech-free times and spaces
- **Mindful notifications**: Only enable essential alerts
- **Attention tracking**: Use apps that monitor your usage patterns
- **Digital sabbath**: Take regular breaks from screens
- **Single-tasking**: Focus on one digital activity at a time

## Getting Started with Mindfulness

If you're new to mindfulness, here are some ways to begin:

- **Guided meditations**: Try apps like Headspace, Calm, or Insight Timer
- **MBSR programs**: Mindfulness-Based Stress Reduction courses (available online or in-person)
- **Books**: Jon Kabat-Zinn's "Wherever You Go, There You Are" or Thich Nhat Hanh's "The Miracle of Mindfulness"
- **Community**: Join local meditation groups or online communities

## Conclusion

Mindfulness isn't about achieving a particular state or eliminating thoughts and feelings. Rather, it's about developing a different relationship with our experiences—one of awareness, acceptance, and compassion. In our increasingly complex and demanding world, this ancient practice offers a pathway to greater well-being, clarity, and presence.

As Jon Kabat-Zinn says, "You can't stop the waves, but you can learn to surf." Mindfulness helps us learn to surf the inevitable waves of life with greater skill and ease.
    `,
    excerpt: "Explore how mindfulness practices are being incorporated into modern life to reduce stress and increase well-being.",
    coverImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=450&fit=crop",
    date: "2023-05-10T16:15:00.000Z",
    author: authors[1],
    category: "health",
    tags: ["mindfulness", "mental health", "well-being", "meditation", "lifestyle"],
    featured: false
  }
];

// In-memory cache for markdown posts
let cachedMarkdownPosts: Post[] = [];
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Function to get all posts (both sample and markdown)
export async function getAllPosts(): Promise<Post[]> {
  try {
    // Import the markdown posts function dynamically to avoid server/client mismatches
    const { getMarkdownPosts } = await import('./markdown');
    
    // Check if cache is valid
    const now = Date.now();
    if (cachedMarkdownPosts.length === 0 || now - lastFetchTime > CACHE_DURATION) {
      // Fetch markdown posts
      const markdownPosts = await getMarkdownPosts();
      cachedMarkdownPosts = markdownPosts;
      lastFetchTime = now;
    }
    
    // Combine sample posts with markdown posts
    const allPosts = [...samplePosts, ...cachedMarkdownPosts];
    
    // Sort by date (newest first)
    return allPosts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error("Error loading markdown posts:", error);
    // Fallback to sample posts if there's an error
    return samplePosts;
  }
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug);
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.featured);
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.tags.includes(tag));
}

export async function getRecentPosts(count: number = 3): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.slice(0, count);
}

export async function getRelatedPosts(currentPost: Post, count: number = 2): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
}

// For backward compatibility - some components might still use this
export const posts = samplePosts; 