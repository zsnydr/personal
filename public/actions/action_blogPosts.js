export default function updateBlogPosts(posts) {
  return {
    type: 'BLOG_POSTS',
    payload: posts
  };
}
