export default function updateActivePost(post) {
  return {
    type: 'ACTIVE_POST',
    payload: post
  };
}
