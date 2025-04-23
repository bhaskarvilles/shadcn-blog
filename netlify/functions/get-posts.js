// Import blog data functions from local file
const { getAllPosts, getFeaturedPosts, getRecentPosts } = require('./blog-data');

exports.handler = async (event) => {
  try {
    const { queryStringParameters } = event;
    const type = queryStringParameters?.type || 'all';
    const count = queryStringParameters?.count ? parseInt(queryStringParameters.count) : undefined;
    
    let posts;
    
    // Fetch posts based on requested type
    switch (type) {
      case 'featured':
        posts = await getFeaturedPosts();
        break;
      case 'recent':
        posts = await getRecentPosts(count);
        break;
      case 'all':
      default:
        posts = await getAllPosts();
        break;
    }
    
    // Return the post data
    return {
      statusCode: 200,
      body: JSON.stringify(posts)
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch posts data' })
    };
  }
}; 