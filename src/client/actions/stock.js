export const SET_STOCK_FROM_MEM_CACHE = 'SET_STOCK_FROM_MEM_CACHE';

export const setStockFromMemCache = symbol => ({
  type: SET_STOCK_FROM_MEM_CACHE,
  symbol
});