export default function (state = [], action) {
  switch (action.type) {
    case 'BLOG_POSTS':
      return action.payload;
  }
  return state;
}
