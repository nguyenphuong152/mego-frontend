

export const SET_PRODUCTS = (state, products) => {
    state.products = products;
}

export const SET_PRODUCT = (state, product) => {
    state.product = product;
}

export const SET_PRODUCT_DETAIL = (state, productDetail) =>{
    state.productDetail = productDetail;
}

export const SET_PRODUCT_PRICE = (state,product) => {
    state.productWithPrice = product;
}

export const ADD_TO_CART = (state, {product,quantity})=>{

    //if select the same product, increase the quantity, not add more product
    let productInCart = state.cart.find(item=>{
        item.product.id === product.id;
    });

    if(productInCart)
    {
        productInCart.quantity +=quantity
        return;
    }

    state.cart.push({
        product,
        quantity
    })
}



export const SET_COLLECTIONS = (state, collections) => {
    state.collections = collections;
}

export const SET_MODELS = (state, models) => {
    state.models = models;
}

export const SET_LISTPRODUCTS_PRICE= (state, listProductWithPrice) => {
    state.listProductWithPrice = listProductWithPrice;
}

export const SET_BRANDS=(state,brands)=>{
    state.brands = brands;
}

export const SET_COLOR_OF_PRODUCT=(state,colors)=>{
    state.colors = colors;
}

export const SET_SIZE_OF_PRODUCT=(state,sizes)=>{
    state.sizes = sizes;
}

export const SET_PRICE_OF_PRODUCT=(state,productDetail)=>{
    state.price = productDetail.price;
}

