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

//cart field
export const addProductToCart = ({commit}, {product,quantity,price}) => {
    commit('ADD_TO_CART',{product,quantity,price});
}

export const deleteProductFromCart = ({commit},product)=>
{
    commit('DELETE_FROM_CART',product)
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

 export const getColorsOfOneProduct=({commit},productId) => {
    axios.get(`https://mego-backend.herokuapp.com/api/guest/product/colors/${productId}`).then(response=>{
        commit('SET_COLOR_OF_PRODUCT', response.data)
    }).catch((error) => console.log(error));
 }

 export const getSizesOfOneProduct=({commit},productId)=>{
    axios.get(`https://mego-backend.herokuapp.com/api/guest/product/sizes/${productId}`).then(response=>{
        commit('SET_SIZE_OF_PRODUCT', response.data)
    }).catch((error) => console.log(error));
 }

 export const getPriceWithColorSize=({commit},{productId,colorId,sizeId})=>{
    axios.get(`https://mego-backend.herokuapp.com/api/guest/product_detail/product/${productId}/color/${colorId}/size/${sizeId}`).then(response=>{
        commit('SET_PRICE_OF_PRODUCT', response.data)
    }).catch((error) => console.log(error));
 }

 export const getListProductFilter=({commit},{colID,brandID,modelID})=>{
    axios.get(`https://mego-backend.herokuapp.com/api/guest/collection/products/${colID}`,{params:{brand_id:brandID, model_id:modelID}}).then(response=>{
        commit('SET_LIST_PRODUCT_FITLER', response.data)
    }).catch((error) => console.log(error));
 }


 
 
//customer field
export const createBill = ({commit}, {total,shipping}) => {
    commit('ADD_TO_BILL',{total,shipping});
}
 

//toggle re-rendering
export const toggleRerender = ({commit}) =>{
    commit('SET_INCREMENT',)
}