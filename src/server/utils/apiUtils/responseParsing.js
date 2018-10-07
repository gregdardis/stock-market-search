import {
  formatDateForMaxStockData
} from '../../../utils/dateUtils/dateFormatting';

export function parseDailyData(dailyData) {
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