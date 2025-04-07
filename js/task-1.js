function makeTransaction(quantity, pricePerDroid) {
  const value = `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
  return value;
}