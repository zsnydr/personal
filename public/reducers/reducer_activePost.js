export default function (state = null, action) {
  switch (action.type) {
    case 'ACTIVE_POST':
      return action.payload;
  }
  return state;
}
