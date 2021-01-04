import axios from "axios";
import router from "../router";

var FormData = require("form-data");
var data = new FormData();
data.append("name", "");
var currentToken = "453|HMZD5kCPJKvsEGrdKxXfUYx8BFdbLRqc547Z91a5";
var Bearer = "";

export const getProducts = ({ commit }) => {
  axios
    .get("http://mego-backend.herokuapp.com/api/guest/products")
    .then((response) => {
      commit("SET_PRODUCTS", response.data);
    })
    .catch((error) => console.log(error));
};

export const getProduct = ({ commit }, productId) => {
  axios
    .get(`http://mego-backend.herokuapp.com/api/guest/products/${productId}`)
    .then((response) => {
      commit("SET_PRODUCT", response.data);
    })
    .catch((error) => console.log(error));
};

export const getProductDetail = ({ commit }, productId) => {
  axios
    .get(
      `http://mego-backend.herokuapp.com/api/guest/product_details/${productId.id}`,
      { params: { id: productId.id } }
    )
    .then((response) => {
      commit("SET_PRODUCT_DETAIL", response.data);
    })
    .catch((error) => console.log(error));
};

//cart field
export const addProductToCart = ({ commit }, { product, quantity, price }) => {
  commit("ADD_TO_CART", { product, quantity, price });
};

export const deleteProductFromCart = ({ commit }, product) => {
  commit("DELETE_FROM_CART", product);
};

export const getProductWithPrice = ({ commit }, id) => {
  axios
    .get(`https://mego-backend.herokuapp.com/api/guest/product_details/${id}`)
    .then((response) => {
      commit("SET_PRODUCT_PRICE", response.data);
    })
    .catch((error) => console.log(error));
};

export const getCollections = ({ commit }, gender) => {
  axios
    .get(
      `https://mego-backend.herokuapp.com/api/guest/collections/gender/${gender}`
    )
    .then((response) => {
      commit("SET_COLLECTIONS", response.data);
    })
    .catch((error) => console.log(error));
};

export const getProductModels = ({ commit }, gender) => {
  axios
    .get(`https://mego-backend.herokuapp.com/api/guest/models/gender/${gender}`)
    .then((response) => {
      commit("SET_MODELS", response.data);
    })
    .catch((error) => console.log(error));
};

export const getListProductWithPrice = ({ commit }) => {
  axios
    .get("https://mego-backend.herokuapp.com/api/guest/products/detail/lowest")
    .then((response) => {
      commit("SET_LISTPRODUCTS_PRICE", response.data);
    })
    .catch((error) => console.log(error));
};

export const getBrands = ({ commit }) => {
  axios
    .get("https://mego-backend.herokuapp.com/api/guest/brands")
    .then((response) => {
      commit("SET_BRANDS", response.data);
    })
    .catch((error) => console.log(error));
};

export const getColorsOfOneProduct = ({ commit }, productId) => {
  axios
    .get(
      `https://mego-backend.herokuapp.com/api/guest/product/colors/${productId}`
    )
    .then((response) => {
      commit("SET_COLOR_OF_PRODUCT", response.data);
    })
    .catch((error) => console.log(error));
};

export const getSizesOfOneProduct = ({ commit }, productId) => {
  axios
    .get(
      `https://mego-backend.herokuapp.com/api/guest/product/sizes/${productId}`
    )
    .then((response) => {
      commit("SET_SIZE_OF_PRODUCT", response.data);
    })
    .catch((error) => console.log(error));
};

export const getPriceWithColorSize = (
  { commit },
  { productId, colorId, sizeId }
) => {
  axios
    .get(
      `https://mego-backend.herokuapp.com/api/guest/product_detail/product/${productId}/color/${colorId}/size/${sizeId}`
    )
    .then((response) => {
      commit("SET_PRICE_OF_PRODUCT", response.data);
    })
    .catch((error) => console.log(error));
};

export const getListProductFilter = (
  { commit },
  { colID, brandID, modelID }
) => {
  axios
    .get(
      `https://mego-backend.herokuapp.com/api/guest/collection/products/${colID}`,
      { params: { brand_id: brandID, model_id: modelID } }
    )
    .then((response) => {
      commit("SET_LIST_PRODUCT_FITLER", response.data);
    })
    .catch((error) => console.log(error));
};

//customer field
export const createBill = ({ commit }, { total, shipping }) => {
  commit("ADD_TO_BILL", { total, shipping });
};

//toggle re-rendering
export const toggleRerender = ({ commit }) => {
  commit("SET_INCREMENT");
};

//getBanner
export const getBanner = ({ commit }) => {
  axios
    .get("https://mego-backend.herokuapp.com/api/image/banners")
    .then((response) => {
      commit("SET_BANNERS", response.data);
    })
    .catch((error) => console.log(error));
};

//register
export const register = ({ commit }, { name, email, password, phone }) => {
  axios
    .post("https://mego-backend.herokuapp.com/api/register", {
      name: name,
      email: email,
      password: password,
      phone: phone,
    })
    .then((response) => {
      commit("REGISTER", response.data);
    })
    .catch((error) => console.log(error));
};

export const setUser = ({ commit }, { name, phone, address, email }) => {
  commit("SET_USER", { name, phone, address, email });
};
//----------------------------------------------------------------------------------------
//------------------------------------------Admin---------------------------------------//
//----------------------------------------------------------------------------------------

export const handleLogin = ({ commit }, { email, password }) => {
  axios
    .post(`https://mego-backend.herokuapp.com/api/login`, { email, password })
    .then((response) => {
      commit("SET_TOKENS", response.data);
      axios.defaults.headers.common["Authorization"] = response.data; //Code de truyen Login Token
      router.replace(`admin/dashboard/`);
    })
    .catch((error) => console.log(error));
};

export const getListModels_Admin = ({ commit }) => {
  Bearer = "Bearer " + currentToken;
  var config = {
    method: "get",
    url: "https://mego-backend.herokuapp.com/api/models",
    headers: {
      Authorization: Bearer,
      ...data.getHeaders,
    },
    data: data,
  };
  axios(config)
    .then((response) => {
      commit("SET_MODELS_ADMIN", response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const getListGenders_Admin = ({ commit }) => {
  Bearer = "Bearer " + currentToken;
  var config = {
    method: "get",
    url: "https://mego-backend.herokuapp.com/api/genders",
    headers: {
      Authorization: Bearer,
      ...data.getHeaders,
    },
    data: data,
  };
  axios(config)
    .then((response) => {
      commit("SET_GENDERS_ADMIN", response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const getProductDetailByID = ({ commit }, id) => {
  axios
    .get(`https://mego-backend.herokuapp.com/api/guest/product_details/${id}`, {
      params: { id: { id } },
    })
    .then((response) => {
      commit("SET_PRODUCT_DETAIL_ADMIN", response.data);
    })
    .catch((error) => console.log(error));
};

export const getProductModelByID = ({ commit }, id) => {
  axios
    .get(`https://mego-backend.herokuapp.com/api/guest/models/${id}`, {
      params: { id: { id } },
    })
    .then((response) => {
      commit("SET_PRODUCT_MODEL_ADMIN", response.data);
    })
    .catch((error) => console.log(error));
};

export const getProductBrandByID = ({ commit }, id) => {
  axios
    .get(`https://mego-backend.herokuapp.com/api/guest/brands/${id}`, {
      params: { id: { id } },
    })
    .then((response) => {
      commit("SET_PRODUCT_BRAND_ADMIN", response.data);
    })
    .catch((error) => console.log(error));
};

export const getOrderList_Admin = ({ commit }) => {
  Bearer = "Bearer " + currentToken;
  var config = {
    method: "get",
    url: "https://mego-backend.herokuapp.com/api/orders",
    headers: {
      Authorization: Bearer,
      ...data.getHeaders,
    },
    data: data,
  };
  axios(config)
    .then((response) => {
      commit("SET_ORDER_LIST_ADMIN", response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const getUserList_Admin = ({ commit }) => {
  Bearer = "Bearer " + currentToken;
  var config = {
    method: "get",
    url: "https://mego-backend.herokuapp.com/api/users",
    headers: {
      Authorization: Bearer,
      ...data.getHeaders,
    },
    data: data,
  };
  axios(config)
    .then((response) => {
      commit("SET_USER_LIST_ADMIN", response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const getListBrand_Admin = ({ commit }) => {
  Bearer = "Bearer " + currentToken;
  var config = {
    method: "get",
    url: "https://mego-backend.herokuapp.com/api/brands",
    headers: {
      Authorization: Bearer,
      ...data.getHeaders,
    },
    data: data,
  };
  axios(config)
    .then((response) => {
      commit("SET_BRANDS_LIST_ADMIN", response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const getBannerList = ({ commit }) => {
  axios
    .get(`https://mego-backend.herokuapp.com/api/image/banners`)
    .then((response) => {
      commit("SET_BANNER_LIST_ADMIN", response.data);
    })
    .catch((error) => console.log(error));
};

// export const getBannerImageListByPriority = ({ commit },prio) => {
//   axios
//     .get(
//       `https://mego-backend.herokuapp.com/api/image/banners/${prio}`,
//       {params:{ priotity:{prio}}}
//     )
//     .then((response) => {
//       console.log("action: ",response.data);
//       commit("SET_BANNER_IMAGE_LIST_ADMIN", response.data,prio);
//     })
//     .catch((error) => console.log(error));
// };
