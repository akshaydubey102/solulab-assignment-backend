export const stringToDate = (str) => {
  const [day, month, year] = str.split('-');
  return new Date(`${year}-${month}-${day}`);
};
