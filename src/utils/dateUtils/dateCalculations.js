import { parseIntExact } from '../typeChecking';

export function calculateDateDaysInPast(date, days) {
  const parsedDays = parseIntExact(days);
  if (!parsedDays) {
    throw new TypeError(
      `${calculateDateDaysInPast.name} requires a number or numeric string.`
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
  if (!parsedMonths) {
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