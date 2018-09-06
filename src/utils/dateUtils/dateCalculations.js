import { parseIntExact } from '../typeChecking';

export function calculateDateDaysInPast(date, days) {
  const parsedDays = parseIntExact(days);
  // need to check isNaN(days)
  // because parseInt turns '12hello' into a number
  if (!parsedDays) {
    throw new TypeError(
      `${calculateDateDaysInPast.name} requires a number or numeric string.`
    );
  }
  const startingDate = date.getDate();
  const newDay = startingDate - days;
  let newDate = date;
  newDate.setDate(newDay);
  return newDate;
}

export function calculateDateDaysInPastFromToday(days) {
  const todaysDate = new Date();
  return calculateDateDaysInPast(todaysDate, days);
}

export function calculateDateMonthsInPast(date, months) {
  const parsedMonths = parseInt(months);
  // need to check isNaN(months)
  // because parseInt turns '12hello' into a number
  if (isNaN(parsedMonths) || isNaN(months)) {
    throw new TypeError(
      `${calculateDateMonthsInPast.name} requires a number or numeric string.`
    );
  }
  const currentMonth = date.getMonth();
  const newMonth = currentMonth - months;
  let newDate = date;
  newDate.setMonth(newMonth);
  return newDate;
}