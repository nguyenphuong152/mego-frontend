export const cartItemCount = (state) =>{
    return state.cart.length;
}


export const productPrice = (state) => {
    return state.productwithLowestPrice.price;
}