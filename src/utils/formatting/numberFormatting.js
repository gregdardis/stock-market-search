import numeral from 'numeral';

import {
  NUMBER_FORMAT_PERCENT,
  NUMBER_FORMAT_PRICE
} from '../../constants/formatting';

/* Takes a number or string */
export const addCommas = number => {
  const parsedNum = parseFloat(number);
  // need to check number because parseFloat turns '12hello' into a number
  if (isNaN(parsedNum) || isNaN(number)) {
    throw new TypeError(
      `${addCommas.name} requires a number or numeric string.`
    );
  }
  let parts = number.toString().split('.');

  const wholeNumberIndex = 0;
  const wholeNumber = parts[wholeNumberIndex];
  const wholeNumberWithCommas = wholeNumber.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ','
  );

  parts[wholeNumberIndex] = wholeNumberWithCommas;

  return parts.join('.');
};

export const calculateFormattedPriceChangePercentage =
  (priceChange, currentPrice) =>
    numeral(priceChange / currentPrice).format(NUMBER_FORMAT_PERCENT);

export const formatAsPrice = value => (
  numeral(value).format(NUMBER_FORMAT_PRICE)
);

export const padSingleDigitWithZero = value => {
  let num = parseInt(value);
  // need to check value because parseInt turns '12hello' into a number
  if (isNaN(value) || isNaN(num)) {
    throw new TypeError(
      `${padSingleDigitWithZero.name} requires a number or numeric string`
    );
  }
  return num < 10 ? '0' + num : num.toString();
};