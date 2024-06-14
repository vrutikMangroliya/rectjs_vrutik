import {combineReducers} from 'redux'
import Reducer from './Redux/Reducer'
import ProductReducer from './ProductRedux/ProductReducer'
import Wishlist_Reducer from './Redux/Wishlist_Reducer'

const RootReducer =combineReducers({
    Reducer,
    Wishlist_Reducer,
    ProductReducer
})

export default RootReducer