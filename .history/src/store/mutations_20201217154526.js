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
    state.cart.splice(index, 1);
  }
};

export const SET_COLLECTIONS = (state, collections) => {
  state.collections = collections;
};

export const SET_MODELS_ADMIN = (state, models) => {
  state.models_Admin = models;
};

export const SET_GENDERS_ADMIN = (state, genders) => {
  state.genders_Admin = genders;
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

export const SET_PRICE_OF_PRODUCT = (state, prod) => {
  console.log(prod);
  if (prod.length == 0) {
    state.price = 0;
    console.log("get null nhe");
  } else {
    console.log("not null");
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
