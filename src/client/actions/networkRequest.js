import { setChartToDefaultTimePeriod } from '.';
import { setSearchError } from '.';
import {
  errorMessageStockNotFound,
  ERROR_MESSAGE_UNEXPECTED
} from '../../constants/userFacing';

export const SET_IS_FETCHING = 'SET_IS_FETCHING';
export const RECEIVE_STOCK = 'RECEIVE_STOCK';

export const receiveStock = ({
  companyName,
  exchange,
  fiveDayStockData,
  maxStockData,
  oneDayStockData,
  stockOverviewData,
  symbol
}) => ({
  type: RECEIVE_STOCK,
  companyName,
  exchange,
  fiveDayStockData,
  maxStockData,
  oneDayStockData,
  receivedAt: Date.now(),
  stockOverviewData,
  symbol
});

export const setIsFetching = isFetching => ({
  type: SET_IS_FETCHING,
  isFetching
});

export const fetchStock = symbol => (
  dispatch => {
    dispatch(setIsFetching(true));
    return fetch(`/api/stocks/${symbol}`)
      .then(res => {
        dispatch(setIsFetching(false));
        if (!res.ok) {
          let errorMessage = ERROR_MESSAGE_UNEXPECTED;
          if (res.status === 404) {
            errorMessage = errorMessageStockNotFound(symbol);
          }
          dispatch(setSearchError(errorMessage));
          return null;
        }
        return res.json();
      })
      .then(json => {
        if (json) {
          dispatch(receiveStock(json));
          dispatch(setChartToDefaultTimePeriod());
        }
      })
      .catch(() => {
        dispatch(setIsFetching(false));
      });
  }
);