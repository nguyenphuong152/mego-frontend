export const SET_PRODUCTS = (state, products) => {
    state.products = products;
}

export const SET_PRODUCT = (state, product) => {
    state.product = product;
}

export const SET_PRODUCT_DETAIL = (state, productDetail) =>{
    state.productDetail = productDetail;
}

export const ADD_TO_CART = (state, {product,quantity})=>{

    //if select the same product, increase the quantity, not add more product
    let productInCart = state.cart.find(item=>{
        return item.product.id === product.id;
    })

    if(productInCart)
    {
        productInCart.quantity +=quantity
        return;
    }

    state.cart= {
        product,
        quantity
    }
}