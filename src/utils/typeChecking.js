// TODO: test this
export function parseIntExact(val) {
  const parsedVal = parseInt(val);
  // TODO: check if isNaN(parsedVal) is really required (by writing tests)
  if (isNaN(val)) {
    return null;
  }
  return parsedVal;
}