export const cartItemCount = (state) =>{
    return state.cart.length;
}

export const listProductWithPrice = (state) => {
    return state.listProductWithPrice;
}

export const listBrand = (state) => {
    return state.brands;
}

export const productWithPrice = (state)=> {
    return state.productWithPrice;
}

export const colorsOfOneProduct = (state)=> {
    return state.colors;
}

export const sizesOfOneProduct = (state)=> {
    return state.sizes;
}

export const cart = (state)=>{
    return state.cart
}

export const selectedProduct = (state)=>{
    return state.selectedProduct.price;
}