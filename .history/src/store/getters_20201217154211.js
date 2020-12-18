export const cartItemCount = (state) => {
  return state.cart.length;
};

export const listProductWithPrice = (state) => {
  return state.listProductWithPrice;
};

export const listBrand = (state) => {
  return state.brands;
};

export const productWithPrice = (state) => {
  return state.productWithPrice;
};

export const colorsOfOneProduct = (state) => {
  return state.colors;
};

export const sizesOfOneProduct = (state) => {
  return state.sizes;
};

export const cart = (state) => {
  return state.cart;
};

export const price = (state) => {
  console.log("price ne: " + state.price);
  return state.price;
};

export const listProductFilter = (state) => {
  return state.listProductFilter;
};

export const bill = (state) => {
  return state.bill;
};

export const increment = (state) => {
  return state.increment;
};

//----------------------------------ADMIN-----------------------------------

export const models_Admin = (state) => {
  return state.models_Admin;
};

export const genders_Admin = (state) => {
  return state.genders_Admin;
};
