import { formatDateForMaxStockData } from '../dateUtils/dateFormatting';

// Used for historical() data obtained using period 'd'
// TODO: rename to parseDailyData (filename too)
// or put in responseParsing.js with other response
// parsers for the api
export function getDatesAndPrices(dailyData) {
  let datesAndPrices = [];
  if (dailyData) {
    dailyData.forEach(({
      date,
      close
    }) => {
      datesAndPrices.unshift({
        date: formatDateForMaxStockData(date),
        price: close
      });
    });
  }
  return datesAndPrices;
}