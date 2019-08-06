export default (state = null, action) => {
  switch(action.type) {
    case 'RANDOM_LIKES':
      return action.payload;
    
    default:
      return state;
  }
}