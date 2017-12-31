export const updateSearchTerm = searchTerm => {
  return {
    type: 'UPDATE_SEARCH_TERM',
    searchTerm
  };
};

export const clearSearchTerm = () => {
  return {
    type: 'CLEAR_SEARCH_TERM'
  };
};