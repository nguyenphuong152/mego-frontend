import axios from 'axios'

export const getProducts=({ commit }) => {
   axios.get('http://mego-backend.herokuapp.com/api/guest/products').then(response=>{
       commit('SET_PRODUCTS', response.data)
   })
}

export const getProduct = ({commit}, productId)=>{
    axios.get(`http://mego-backend.herokuapp.com/api/guest/products/${productId}`).then(response=>{
        commit('SET_PRODUCT', response.data)
    })
}

export const getProductDetail = ({commit}, productId)=>{
    axios.get(`http://mego-backend.herokuapp.com/api/guest/product_details/${productId}`).then(response=>{
        commit('SET_PRODUCT_DETAIL', response.data)
    })
}

export const addProductToCart = ({commit}, {product,quantity}) => {
    commit('ADD_TO_CART',{product,quantity});
}


export const getCollections = ({commit},gender) =>{
    axios.get(`https://mego-backend.herokuapp.com/api/guest/collections/gender/${gender}`).then(response=>{
        commit('SET_COLLECTIONS', response.data)
    })
}

export const getProductModels = ({commit},gender) =>{
    axios.get(`https://mego-backend.herokuapp.com/api/guest/models/gender/${gender}`).then(response=>{
        commit('SET_MODELS', response.data)
    })
}

export const getListProductWithPrice=({ commit }) => {
    axios.get('https://mego-backend.herokuapp.com/api/guest/products/detail/lowest').then(response=>{
        commit('SET_LISTPRODUCTS_PRICE', response.data)
    })
 }

 export const getBrands=({ commit }) => {
    axios.get('https://mego-backend.herokuapp.com/api/guest/brands').then(response=>{
        commit('SET_BRANDS', response.data)
    })
 }

