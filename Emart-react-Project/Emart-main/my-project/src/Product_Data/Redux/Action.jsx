import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART, ADD_WISHLIST , REMOVE_WISHLIST, EMPTY_WISHLIST} from "./Constant";

export const addToCart = (data) => {
    console.warn('addToCartAction Called', data);

    return{
        type :ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) =>{
    console.warn('removeToCart Called', data);

    return{
        type:REMOVE_TO_CART,
        data
    }
}

export const EmptyCart = () =>{
    console.log('emptyCartAction Called');

    return{
        type:EMPTY_CART
    }
}

export const addwishlist = (data) =>{
    console.warn('removeToWishlisht' , data)
    return{
        type:ADD_WISHLIST,
        data
    }
}

export const removewishlist = (data) =>{
    console.warn('remove to wishlist called',data);
    return{
      type:REMOVE_WISHLIST,
      data
    }
  }

  export const emptywishlist = () =>{
    console.warn('empty wishlist called');
    return{
      type:EMPTY_WISHLIST,
    }
  }