// This file exports the blog data functions for use in Netlify functions
const { 
  getPostBySlug, 
  getAllPosts, 
  getFeaturedPosts, 
  getPostsByCategory,
  getPostsByTag,
  getRecentPosts,
  getRelatedPosts
} = require('./lib/blog-data');

module.exports = {
  getPostBySlug,
  getAllPosts,
  getFeaturedPosts,
  getPostsByCategory,
  getPostsByTag,
  getRecentPosts,
  getRelatedPosts
}; 