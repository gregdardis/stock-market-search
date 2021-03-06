import { parseIntExact } from '../parseIntExact';

export function calculateDateDaysInPast(date, days) {
  const parsedDays = parseIntExact(days);
  /* eslint-disable-next-line eqeqeq */
  if (parsedDays == null) {
    throw new TypeError(
      `${calculateDateDaysInPast.name} requires a number or ` +
      'numeric string for "days" parameter.'
    );
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new TypeError(
      `${calculateDateDaysInPast.name} requires a Date for "date" parameter.`
    );
  }
  const startingDate = date.getDate();
  const newDay = startingDate - parsedDays;
  let newDate = date;
  newDate.setDate(newDay);
  return newDate;
}

export function calculateDateDaysInPastFromToday(days) {
  const todaysDate = new Date();
  return calculateDateDaysInPast(todaysDate, days);
}

export function calculateDateMonthsInPast(date, months) {
  const parsedMonths = parseIntExact(months);
  /* eslint-disable-next-line eqeqeq */
  if (parsedMonths == null) {
    throw new TypeError(
      `${calculateDateMonthsInPast.name} requires a number or numeric string.`
    );
  }
  const currentMonth = date.getMonth();
  const newMonth = currentMonth - parsedMonths;
  let newDate = date;
  newDate.setMonth(newMonth);
  return newDate;
}