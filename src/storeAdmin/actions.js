import axios from 'axios'


export const handleLogin= ({commit},{email,password})=>{
    axios.post(`https://mego-backend.herokuapp.com/api/login`,{email,password}).then(response=>{
        commit('SET_TOKENS',response.data)
    }).catch((error)=>console.log(error));
}

export const getProducts=({ commit }) => {
    axios.get('http://mego-backend.herokuapp.com/api/guest/products').then(response=>{
        commit('SET_PRODUCTS', response.data)
     }).catch((error) => console.log(error));
 }