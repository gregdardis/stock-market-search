export const calculateDateDaysInPast = (date, days) => {
  const parsedDays = parseInt(days);
  // need to check isNaN(days)
  // because parseInt turns '12hello' into a number
  if (isNaN(parsedDays) || isNaN(days)) {
    throw new TypeError(
      `${calculateDateDaysInPast.name} requires a number or numeric string.`
    );
  }
  const startingDate = date.getDate();
  const newDay = startingDate - days;
  let newDate = date;
  newDate.setDate(newDay);
  return newDate;
};

export const calculateDateDaysInPastFromToday = days => {
  const todaysDate = new Date();
  return calculateDateDaysInPast(todaysDate, days);
};

// export const calculateDateDaysInPastFromToday = (todaysDate, days) => {
//   return calculateDateDaysInPast(todaysDate, days);
// };

export const calculateDateMonthsInPast = (date, months) => {
  const currentMonth = date.getMonth();
  const newMonth = currentMonth - months;
  let newDate = date;
  newDate.setMonth(newMonth);
  return newDate;
};