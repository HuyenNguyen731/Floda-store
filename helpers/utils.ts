export const formatCurrency = (number = 0) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // maximumFractionDigits: 0,
    // minimumFractionDigits: 0,
  }).format(number);
};
