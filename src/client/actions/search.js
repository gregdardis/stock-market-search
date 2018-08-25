export const CLEAR_SEARCH_ERROR = 'CLEAR_SEARCH_ERROR';
export const CLEAR_SEARCH_TERM = 'CLEAR_SEARCH_TERM';
export const EMPTY_SEARCH = 'EMPTY_SEARCH';
export const PERFORM_SEARCH = 'PERFORM_SEARCH';
export const SET_SEARCH_ERROR = 'SET_SEARCH_ERROR';
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';

export const clearSearchError = () => ({
  type: CLEAR_SEARCH_ERROR
});

export const clearSearchTerm = () => ({
  type: CLEAR_SEARCH_TERM
});

export const performSearch = searchText => ({
  type: PERFORM_SEARCH,
  searchText
});

export const setSearchError = errorMessage => ({
  type: SET_SEARCH_ERROR,
  errorMessage
});

export const updateSearchTerm = searchText => ({
  type: UPDATE_SEARCH_TERM,
  searchText
});