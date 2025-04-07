function getShippingMessage(country, price, deliveryFee) {
    const value = `Shipping to ${country} will cost ${price + deliveryFee} credits`;
    return value;
}