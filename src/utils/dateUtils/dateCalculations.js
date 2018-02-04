export const calculateDateDaysInPast = (date, days) => {
  const currentDate = date.getDate();
  const newDate = currentDate - days;
  date.setDate(newDate);
  return date;
};

export const calculateDateDaysInPastFromToday = days => {
  const todaysDate = new Date();
  return calculateDateDaysInPast(todaysDate, days);
};

export const calculateDateMonthsInPast = (date, months) => {
  const currentMonth = date.getMonth();
  const newMonth = currentMonth - months;
  date.setMonth(newMonth);
  return date;
};