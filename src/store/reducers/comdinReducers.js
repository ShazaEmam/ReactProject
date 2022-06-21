import { combineReducers } from "redux";
import loaderReducer from './loader';

const combineReducer = combineReducers({
  
    loader:loaderReducer,

})

export default combineReducer