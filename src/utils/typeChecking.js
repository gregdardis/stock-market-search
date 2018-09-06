export function parseIntExact(val) {
  const parsedVal = parseInt(val);
  if (isNaN(val) || isNaN(parsedVal)) {
    return null;
  }
  return parsedVal;
}