import { setChartToDefaultTimePeriod } from '.';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const REQUEST_STOCK = 'REQUEST_STOCK';

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

export const requestStock = symbol => ({
  type: REQUEST_STOCK,
  symbol
});

// Help from https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export const fetchStock = symbol => (
  dispatch => {
    dispatch(requestStock(symbol));

    return fetch(`/api/stocks/${symbol}`)
      .then(
        res => {
          if (!res.ok) {
            throw new Error(`Result not ok, status code: ${res.status}`);
          }
          return res.json();
        })
      .then(json => {
        dispatch(receiveStock(json));
        dispatch(setChartToDefaultTimePeriod());
      })
      .catch(error => {
        // TODO: dispatch an action to show an error message
        console.log(`Error on fetchStock: ${error}`);
      });
  }
);