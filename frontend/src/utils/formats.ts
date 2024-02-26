export const formatBrandName = (brand: string) =>
  brand.split(" ").join("-").toLowerCase();

export const formatPrice = (price: number) => {
  const cents = price;
  const dollars = (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return dollars;
};
