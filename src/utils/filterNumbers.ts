export const filterNumbers = (str: string) =>
  +str
    .split('')
    .filter((el) => !isNaN(+el))
    .join('');
