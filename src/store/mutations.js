export const SET_PRODUCTS = (state, products) => {
  state.products = products;
};

export const SET_PRODUCT = (state, product) => {
  state.product = product;
};

export const SET_PRODUCT_DETAIL = (state, productDetail) => {
  state.productDetail = productDetail;
};

export const SET_PRODUCT_PRICE = (state, product) => {
  state.productWithPrice = product;
};

export const ADD_TO_CART = (state, { product, quantity, price }) => {
  //if select the same product, increase the quantity, not add more product
  let productInCart = state.cart.find((item) => {
    item.product.id === product.id;
  });

  if (productInCart) {
    productInCart.quantity += quantity;
    return;
  }

  state.cart.push({
    product,
    quantity,
    price,
  });
};

export const DELETE_FROM_CART = (state, product) => {
  var index = -1;
  for (var i = 0; i < state.cart.length; i++) {
    if (state.cart[i].product.name === product.name) {
      index = i;
      break;
    }
  }
  if (index > -1) {
    console.log("hihi splice");
    state.cart.splice(index, 1);
  }
};

export const SET_COLLECTIONS = (state, collections) => {
  state.collections = collections;
};

export const SET_LISTPRODUCTS_PRICE = (state, listProductWithPrice) => {
  state.listProductWithPrice = listProductWithPrice;
};

export const SET_BRANDS = (state, brands) => {
  state.brands = brands;
};

export const SET_COLOR_OF_PRODUCT = (state, colors) => {
  state.colors = colors;
};

export const SET_SIZE_OF_PRODUCT = (state, sizes) => {
  state.sizes = sizes;
};

export const SET_LIST_PRODUCT_FITLER = (state, listProducts) => {
  state.listProductFilter = listProducts;
};

export const SET_GENDERS_ADMIN = (state, genders) => {
  state.genders_Admin = genders;
};

export const SET_PRICE_OF_PRODUCT = (state, prod) => {
  if (prod.length == 0) {
    state.price = 0;
  } else {
    state.price = prod[0].price;
  }
};

export const ADD_TO_BILL = (state, { total, shipping }) => {
  state.bill.subtotal = total;
  state.bill.shipping = shipping;
  state.bill.total = Number(total) + Number(shipping);
};

export const SET_INCREMENT = (state) => {
  state.increment++;
};

export const SET_MODELS = (state, models) => {
  state.models = models;
};

export const SET_BANNERS = (state, banners) => {
  state.banners = banners;
};

export const REGISTER = (state) => {
  state.isLogin = !state.isLogin;
};

export const LOGIN = (state, { user, token }) => {
  state.isLogin = true;
  state.user.name = user.name;
  state.user.email = user.email;
  state.user.token = token;
  state.user.address = user.address;
  state.user.phone = user.phone;
  state.user.id = user.id;
};

export const SET_USER = (state, { name, email, phone, address }) => {
  state.user.name = name;
  state.user.email = email;
  state.user.phone = phone;
  state.user.address = address;
};

export const DELETE_USER = (state) => {
  state.user = [];
};

export const LOGOUT = (state) => {
  state.isLogin = false;
};

export const PLACE_ORDER = (state, order) => {
  state.orderId = order.id;
};

export const UPDATE_CART = (state, listProducts) => {
  for (let i = 0; i < state.cart.length; i++) {
    if (state.cart[i].quantity != listProducts[i].quantity) {
      state.cart[i].quantity = listProducts[i].quantity;
    }
  }
};

export const CREATE_ORDER_DETAIL = (state) => {
  console.log(state.isLogin);
};

export const SET_COUPON = (state, coupon) => {
  state.coupon = coupon;
};

export const DELETE_COUPON = (state) => {
  state.coupon = null;
};

//---------------------------------------------ADMIN---------------------------------------------------

export const SET_MODELS_ADMIN = (state, models) => {
  state.models_Admin = models;
};

export const SET_PRODUCT_DETAIL_ADMIN = (state, productDetail) => {
  state.productDetail_Admin = productDetail;
};
export const SET_TOKENS = (state, token) => {
  state.token = JSON.stringify(token.token);
  localStorage.setItem("token", token.token);
  console.log(state.token);
};

export const HANDLE_LOGIN = (state, { email, password }) => {
  (state.Account.email = email), (state.Account.password = password);
};

export const SET_PRODUCT_MODEL_ADMIN = (state, model) => {
  state.productModel_Admin = model;
};
export const SET_PRODUCT_BRAND_ADMIN = (state, brand) => {
  state.productBrand_Admin = brand;
};
export const SET_ORDER_LIST_ADMIN = (state, orderList) => {
  state.orderList = orderList;
};
export const SET_USER_LIST_ADMIN = (state, userList) => {
  state.userList = userList;
};
export const SET_BRANDS_LIST_ADMIN = (state, brandList) => {
  state.brandList = brandList;
};
export const SET_BANNER_LIST_ADMIN = (state, bannerList) => {
  state.bannerList = bannerList;
};
export const SET_BANNER_IMAGE_ADMIN = (
  state,
  bannerImageListByPriority,
  prio
) => {
  state.bannerImageListByPriority[prio] = bannerImageListByPriority;
};
export const SET_USER_INFO = (state, userInfo) => {
  state.userInfo = userInfo;
};
