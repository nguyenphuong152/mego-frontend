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

export const listBanner = (state) => {
  return state.banners;
};

export const isRegister = (state) => {
  return state.isRegister;
};

export const isLogin = (state) => {
  return state.isLogin;
};

export const getUser = (state) => {
  return state.user;
};

export const orderId = (state) => {
  return state.orderId;
};

//----------------------------------ADMIN-----------------------------------

export const models_Admin = (state) => {
  return state.models_Admin;
};

export const genders_Admin = (state) => {
  return state.genders_Admin;
};

export const getToken = (state) => {
  return state.token;
};

export const getProductDetail_Admin = (state) => {
  return state.productDetail_Admin;
};

export const getOrderList_Admin = (state) => {
  return state.orderList;
};

export const getUserList_Admin = (state) => {
  return state.userList;
};

export const getBrandList_Admin = (state) => {
  return state.brandList;
};

export const getBannerList = (state) => {
  return state.bannerList;
};

// export const getBannerImageListByPriority = (state) =>{
//   return state.bannerImageListByPriority;
// }
