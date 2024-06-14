import { ADD_TO_CART , REMOVE_TO_CART ,EMPTY_CART } from "./Constant";

const getCartDataFromLocalStorage = () => {
    const cartData = localStorage.getItem('cart')
    return cartData ? JSON.parse(cartData) : [];
}

const reducer =(state = getCartDataFromLocalStorage(), action) => {
    switch(action.type){
        case ADD_TO_CART:
            console.warn('addToCartReducer Called', action);
            //const updatedCartAdd = [action.data , ...state]
           // localStorage.setItem['cart',JSON.stringify(updatedCartAdd)]
           // return updatedCartAdd

           const existingproduct = state.findIndex(item => item.id === action.data.id)
           let updatecartData;
           console.log(updatecartData);
           if(existingproduct >= 0){
            updatecartData = state.map((item) => item.id === action.data.id ? {...item, quntity: item.quntity += 1} : item)
            localStorage.setItem('cart', JSON.stringify(updatecartData))
           }else{
            updatecartData = [{...action.data, quntity: 1},...state]
            localStorage.setItem('cart',JSON.stringify(updatecartData))
           }
           return updatecartData

        case REMOVE_TO_CART:    
            const updatedCartRmove = state.filter(item => item.id !== action.data)
            localStorage.setItem('cart' ,JSON.stringify(updatedCartRmove))
            return updatedCartRmove
        
        case EMPTY_CART:
            localStorage.removeItem('cart')
            return []
        
        default: return state
    }
}

export default reducer
