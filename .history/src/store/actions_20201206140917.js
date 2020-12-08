import axios from 'axios'

export const getProducts=({ commit }) => {
   axios.get('http://mego-backend.herokuapp.com/api/guest/products').then(response=>{
       commit('SET_PRODUCTS', response.data)
    }).catch((error) => console.log(error));
}

export const getProduct = ({commit}, productId)=>{
    axios.get(`http://mego-backend.herokuapp.com/api/guest/products/${productId}`).then(response=>{
        commit('SET_PRODUCT', response.data)
    }).catch((error) => console.log(error));
}

export const getProductDetail = ({commit}, productId)=>{
    axios.get(`http://mego-backend.herokuapp.com/api/guest/product_details/${productId}`).then(response=>{
        commit('SET_PRODUCT_DETAIL', response.data)
    }).catch((error) => console.log(error));
}

export const addProductToCart = ({commit}, {product,quantity}) => {
    commit('ADD_TO_CART',{product,quantity});
}

export const getProductWithPrice = ({commit}, product) =>{
    commit('SET_PRODUCT_PRICE', product)
}



export const getCollections = ({commit},gender) =>{
    axios.get(`https://mego-backend.herokuapp.com/api/guest/collections/gender/${gender}`).then(response=>{
        commit('SET_COLLECTIONS', response.data)
    }).catch((error) => console.log(error));
}

export const getProductModels = ({commit},gender) =>{
    axios.get(`https://mego-backend.herokuapp.com/api/guest/models/gender/${gender}`).then(response=>{
        commit('SET_MODELS', response.data)
    }).catch((error) => console.log(error));
}

export const getListProductWithPrice=({ commit }) => {
    axios.get('https://mego-backend.herokuapp.com/api/guest/products/detail/lowest').then(response=>{
        commit('SET_LISTPRODUCTS_PRICE', response.data)
    }).catch((error) => console.log(error));
 }

 export const getBrands=({ commit }) => {
    axios.get('https://mego-backend.herokuapp.com/api/guest/brands').then(response=>{
        commit('SET_BRANDS', response.data)
    }).catch((error) => console.log(error));
 }

 export const getColorsOfOnProduct=({commit},productId) => {
    axios.get(`https://mego-backend.herokuapp.com/api/guest/product/colors/${productId}`).then(response=>{
        commit('SET_COLOR_OF_PRODUCT', response.data)
    }).catch((error) => console.log(error));
 }

