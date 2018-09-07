import { formatDateForMaxStockData } from '../dateUtils/dateFormatting';

// Used for historical() data obtained using period 'd'
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