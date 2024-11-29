export const currencyFormat = (value: number) => {
  return new Intl.NumberFormat("id-ID", { currency: "IDR" }).format(value);
};
