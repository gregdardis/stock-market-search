// takes the old state and an action,
// then returns the new state
export const reducer = (state = '', action) => {
  switch (action.type) {
  case 'UPDATE_SEARCH_TERM':
    return action.searchTerm;
  default:
    return state;
  }
};