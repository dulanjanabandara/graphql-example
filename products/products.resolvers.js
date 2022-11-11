const productsModel = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProducts();
    },
    productByPrice: (_, args) => {
      return productsModel.getProductByPrice(args.min, args.max);
    },
    productById: (_, args) => {
      return productsModel.getProductById(args.id);
    },
  },
};
