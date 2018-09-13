import { NUMBER_FORMAT_DEFAULT } from '../../constants/formatting';
import { isString } from '../typeChecking';

export function createStockDataEntry(value, options = {}) {
  if (typeof value !== 'number') {
    throw new TypeError(
      `${createStockDataEntry.name} requires a number ` +
      'for the value parameter.'
    );
  }

  const {
    optionalValue,
    valueFormat = NUMBER_FORMAT_DEFAULT,
    optionalValueFormat = NUMBER_FORMAT_DEFAULT
  } = options;

  if (optionalValue) {
    if (typeof optionalValue !== 'number') {
      throw new TypeError(
        `${createStockDataEntry.name} requires a number ` +
        'for the optionalValue option.'
      );
    }
  }

  if (!isString(valueFormat)) {
    throw new TypeError(
      `${createStockDataEntry.name} requires a string for ` +
      'the valueFormat option'
    );
  }

  if (!isString(optionalValueFormat)) {
    throw new TypeError(
      `${createStockDataEntry.name} requires a string for ` +
      'the optionalValueFormat option'
    );
  }

  return {
    value,
    optionalValue,
    valueFormat,
    optionalValueFormat
  };
}