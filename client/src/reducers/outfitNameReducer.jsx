export default (state = null, action) => {
  switch(action.type) {
    case 'OUTFIT_NAME':
      return action.payload;

    default:
      return state;
  }
}