const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
  },
  {
    id: "bluejean",
    description: "Blue Jeans",
    price: 55.55,
  },
];

function getAllProducts() {
  return products;
}

function getProductByPrice(min, max) {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
}

function getProductById(id) {
  return products.find((product) => id === product.id);
}

module.exports = {
  getAllProducts,
  getProductByPrice,
  getProductById,
};
