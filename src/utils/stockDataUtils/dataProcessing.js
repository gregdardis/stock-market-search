import {
  LABEL_CURRENT_PRICE,
  LABEL_DIVIDEND,
  LABEL_FCFY,
  LABEL_HIGH,
  LABEL_LOW,
  LABEL_MARKET_CAP,
  LABEL_OPEN,
  LABEL_PE_RATIO,
  LABEL_PREVIOUS_CLOSE,
  LABEL_ROE,
  LABEL_VOLUME
} from '../../constants/userFacingStrings';
import { createStockDataEntry } from './createStockDataEntry';
import { calculateFcfy } from './calculations';
import {
  NUMBER_FORMAT_PERCENT,
  NUMBER_FORMAT_SHORT_SUFFIXED
} from '../../constants/formatting';

export function processStockData({
  averageVolume,
  currentPrice,
  dayHigh,
  dayLow,
  dividendRate,
  dividendYield,
  freeCashflow,
  marketCap,
  open,
  previousClose,
  returnOnEquity,
  trailingEps,
  trailingPE,
  volume
}) {
  return {
    [LABEL_PREVIOUS_CLOSE]: createStockDataEntry(previousClose),
    [LABEL_CURRENT_PRICE]: createStockDataEntry(currentPrice),
    [LABEL_OPEN]: createStockDataEntry(open),
    [LABEL_HIGH]: createStockDataEntry(dayHigh),
    [LABEL_LOW]: createStockDataEntry(dayLow),
    [LABEL_DIVIDEND]: createStockDataEntry(
      dividendRate,
      {
        optionalValue: dividendYield,
        optionalValueFormat: NUMBER_FORMAT_PERCENT
      }
    ),
    [LABEL_MARKET_CAP]: createStockDataEntry(marketCap,
      {
        valueFormat: NUMBER_FORMAT_SHORT_SUFFIXED
      }),
    [LABEL_VOLUME]: createStockDataEntry(
      volume,
      {
        valueFormat: NUMBER_FORMAT_SHORT_SUFFIXED,
        optionalValue: averageVolume,
        optionalValueFormat: NUMBER_FORMAT_SHORT_SUFFIXED
      }
    ),
    [LABEL_PE_RATIO]: createStockDataEntry(
      trailingPE,
      {
        optionalValue: trailingEps
      }
    ),
    [LABEL_ROE]: createStockDataEntry(
      returnOnEquity,
      {
        valueFormat: NUMBER_FORMAT_PERCENT
      }
    ),
    [LABEL_FCFY]: createStockDataEntry(
      calculateFcfy(freeCashflow, marketCap),
      {
        valueFormat: NUMBER_FORMAT_PERCENT
      }
    )
  };
}