import { parseIntExact } from '../parseIntExact';

/** Returns a decimal, multiply by 100 for a percentage */
export function calculateFcfy(freeCashflow, marketCap) {
  const parsedFreeCashflow = parseIntExact(freeCashflow);
  const parsedMarketCap = parseIntExact(marketCap);
  /* eslint-disable-next-line eqeqeq */
  if (parsedFreeCashflow == null || parsedMarketCap == null) {
    throw new TypeError(
      `${calculateFcfy.name} requires a number or numeric string.`
    );
  }
  return parsedMarketCap > 0 ? (parsedFreeCashflow / parsedMarketCap) : 0;
}