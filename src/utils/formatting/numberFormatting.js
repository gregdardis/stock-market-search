/* Takes a number or string */
export const addCommas = number => {
  const parsedNum = parseFloat(number);
  // need to check number because parseFloat turns '12hello' into a number
  if (isNaN(parsedNum) || isNaN(number)) {
    throw new TypeError(`${addCommas.name} requires a number or numeric string.`);
  }
  // if (isNaN(number) || Array.isArray(number) || typeof number === 'boolean') {
  //   throw new TypeError(`${addCommas.name} requires a number or numeric string.`);
  // }
  let parts = number.toString().split('.');

  const wholeNumberIndex = 0;
  const wholeNumber = parts[wholeNumberIndex];
  const wholeNumberWithCommas = wholeNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  parts[wholeNumberIndex] = wholeNumberWithCommas;

  return parts.join('.');
};

export const roundAndAddCommas = (value, precision) => {
  let result = value.toFixed(precision);
  return addCommas(result);
};