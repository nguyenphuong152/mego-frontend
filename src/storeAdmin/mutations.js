
export const SET_TOKENS = (state, token) => {
    state.token = token;
    localStorage.setItem("token");
}

export const HANDLE_LOGIN = (state,{email,password})=>{
    state.Account.email = email,
    state.Account.password = password;
}
export const SET_PRODUCTS = (state, products) => {
    state.products = products;
}