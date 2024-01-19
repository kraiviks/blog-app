export type Currency = ValueOf<typeof Currency>;

export const Currency = {
  UAN: 'UAN',
  EUR: 'EUR',
  USD: 'USD',
} as const;
