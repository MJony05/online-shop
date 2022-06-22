import {combineReducers} from "redux";
import {addCardReducer, productReducer, selectedProductReducer} from "./productReducer";
export const reducers = combineReducers({
  allProducts:productReducer,
  product:selectedProductReducer,
  cards:addCardReducer
})