import { NUMBER_FORMAT_DEFAULT } from '../../constants/formatting';
import {
  isString,
  parseIntExact
} from '../typeChecking';

export function createStockDataEntry(value, options = {}) {
  const parsedValue = parseInt(value);
  if (isNaN(value) || isNaN(parsedValue)) {
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

  let parsedOptionalValue;
  if (optionalValue) {
    parsedOptionalValue = parseInt(optionalValue);
    if (isNaN(optionalValue) || isNaN(parsedOptionalValue)) {
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
    value: parsedValue,
    optionalValue: parsedOptionalValue,
    valueFormat,
    optionalValueFormat
  };
}