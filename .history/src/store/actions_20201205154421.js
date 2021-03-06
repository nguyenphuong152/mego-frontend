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

export const findLowestPrice = ({commit},products)=>{
    commit('FIND_LOWEST_PRICE',{products});
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

export const getProductWithLowestPrice = ({commit}, productId)=>{
    axios.get(`https://mego-backend.herokuapp.com/api/guest/product/lowest_price/${productId}`).then(response=>{
        commit('SET_PRODUCT_WITH_LOWEST_PRICE', response.data)
    })
}