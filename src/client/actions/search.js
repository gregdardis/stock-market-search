export const CLEAR_SEARCH_ERROR = 'CLEAR_SEARCH_ERROR';
export const CLEAR_SEARCH_TEXT = 'CLEAR_SEARCH_TEXT';
export const EMPTY_SEARCH = 'EMPTY_SEARCH';
export const PERFORM_SEARCH = 'PERFORM_SEARCH';
export const RECEIVE_SEARCH_ERROR = 'RECEIVE_SEARCH_ERROR';
export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';

export const clearSearchError = () => ({
  type: CLEAR_SEARCH_ERROR
});

export const clearSearchText = () => ({
  type: CLEAR_SEARCH_TEXT
});

export const performSearch = searchText => ({
  type: PERFORM_SEARCH,
  searchText
});

export const receiveSearchError = errorMessage => ({
  type: RECEIVE_SEARCH_ERROR,
  errorMessage
});

export const updateSearchText = searchText => ({
  type: UPDATE_SEARCH_TEXT,
  searchText
});