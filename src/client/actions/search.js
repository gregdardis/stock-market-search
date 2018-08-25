export const CLEAR_ERROR = 'CLEAR_ERROR';
export const CLEAR_SEARCH_TERM = 'CLEAR_SEARCH_TERM';
export const EMPTY_SEARCH = 'EMPTY_SEARCH';
export const PERFORM_SEARCH = 'PERFORM_SEARCH';
export const SET_ERROR = 'SET_ERROR';
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';

export const clearError = () => ({
  type: CLEAR_ERROR
});

export const clearSearchTerm = () => ({
  type: CLEAR_SEARCH_TERM
});

export const performSearch = searchTerm => ({
  type: PERFORM_SEARCH,
  searchTerm
});

export const setError = errorMessage => ({
  type: SET_ERROR,
  errorMessage
});

export const updateSearchTerm = searchTerm => ({
  type: UPDATE_SEARCH_TERM,
  searchTerm
});