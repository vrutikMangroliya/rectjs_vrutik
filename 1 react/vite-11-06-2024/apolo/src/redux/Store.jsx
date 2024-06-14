import CakeReducer from './cake/CakeReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import {createStore , applyMiddleware} from "redux";

const store = createStore(CakeReducer , composeWithDevTools(applyMiddleware(logger)))

export default store