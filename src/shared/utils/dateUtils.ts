export const MONTH_NAMES = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

export const getMonthName = (month: number): string => {
  if (month < 1 || month > 12) return 'ERR';
  return MONTH_NAMES[month - 1];
};

export const padZero = (num: number, digits: number = 2): string => {
  return num.toString().padStart(digits, '0');
};
