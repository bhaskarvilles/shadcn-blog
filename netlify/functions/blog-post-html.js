// Import blog data functions from local file
const { getPostBySlug } = require('./blog-data');

exports.handler = async (event) => {
  try {
    // Get slug from the path parameter
    const slug = event.path.split('/').pop();
    
    if (!slug) {
      return {
        statusCode: 404,
        headers: {
          'Content-Type': 'text/html',
        },
        body: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Post Not Found</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body class="bg-gray-100 min-h-screen flex items-center justify-center">
          <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 m-4">
            <h1 class="text-2xl font-bold text-center text-gray-800 mb-4">Post Not Found</h1>
            <p class="text-gray-600 text-center mb-6">The post you're looking for doesn't exist or has been moved.</p>
            <div class="text-center">
              <a href="/" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Go Home
              </a>
            </div>
          </div>
        </body>
        </html>
        `
      };
    }

    // Fetch the post by slug
    const post = await getPostBySlug(slug);
    
    if (!post) {
      return {
        statusCode: 404,
        headers: {
          'Content-Type': 'text/html',
        },
        body: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Post Not Found</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body class="bg-gray-100 min-h-screen flex items-center justify-center">
          <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 m-4">
            <h1 class="text-2xl font-bold text-center text-gray-800 mb-4">Post Not Found</h1>
            <p class="text-gray-600 text-center mb-6">The post you're looking for doesn't exist or has been moved.</p>
            <div class="text-center">
              <a href="/" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Go Home
              </a>
            </div>
          </div>
        </body>
        </html>
        `
      };
    }

    // Format the date
    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    };

    // Generate HTML for the blog post
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      },
      body: `
      <!DOCTYPE html>
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
                ${require('marked').marked(post.content)}
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
      </html>
      `
    };
  } catch (error) {
    console.error('Error rendering blog post:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/html',
      },
      body: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Error</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      </head>
      <body class="bg-gray-100 min-h-screen flex items-center justify-center">
        <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 m-4">
          <h1 class="text-2xl font-bold text-center text-gray-800 mb-4">Server Error</h1>
          <p class="text-gray-600 text-center mb-6">Sorry, something went wrong while loading the post.</p>
          <div class="text-center">
            <a href="/" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Go Home
            </a>
          </div>
        </div>
      </body>
      </html>
      `
    };
  }
}; 