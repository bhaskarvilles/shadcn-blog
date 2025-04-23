// Import blog data functions from our helper file
const path = require('path');
const { getPostBySlug } = require('../../netlify-blog-api');

exports.handler = async (event) => {
  try {
    // Get slug from the path parameter
    const slug = event.path.split('/').pop();
    
    if (!slug) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Post slug is required' })
      };
    }

    // Fetch the post by slug
    const post = await getPostBySlug(slug);
    
    if (!post) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Post not found' })
      };
    }

    // Return the post data
    return {
      statusCode: 200,
      body: JSON.stringify(post)
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch post data' })
    };
  }
}; 