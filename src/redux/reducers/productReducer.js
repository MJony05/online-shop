import {ActionType} from "../contents/action-type";
const initialState = {
  product:[],
  cards:[]
}
export const productReducer = (state=initialState, {type,payload})=>{
 switch (type) {
   case ActionType.SET_PRODUCTS: return {...state,product: payload}
   default: return {product: [...state.product]}
 }
}
export const selectedProductReducer = (state= {},{type,payload}) => {
  switch (type) {
    case ActionType.SELECTED_PRODUCT: return {...state,...payload}
    case ActionType.REMOVE_SELECTED_PRODUCT: return {}
    default: return state
  }
}
export const addCardReducer = (state=initialState,{type,payload})=>{
  switch (type) {
    case ActionType.ADD_CARD: return {cards:[...state.cards,payload]}
    default: return {cards:[...state.cards]}
  }
}