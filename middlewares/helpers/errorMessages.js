// Object Literals
function errorMessage(type) {
  const Message = {
    notFoundProduct: { message: 'Product not found' },
    notFoundSale: { message: 'Sale not found' },
    createProductConflict: { message: 'Product already exists' },
  };
  return Message[type];
}

module.exports = {
  errorMessage,
};