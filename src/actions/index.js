export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const CLEAR_SEARCH_TERM = 'CLEAR_SEARCH_TERM';

export const updateSearchTerm = searchTerm => ({
  type: UPDATE_SEARCH_TERM,
  searchTerm
});

export const clearSearchTerm = () => ({
  type: CLEAR_SEARCH_TERM
});