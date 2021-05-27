import { combineReducers } from "redux";
import layoutReducer from "./layoutReducer";
import categoryReducer from "./categoryReducer"

export default combineReducers({
  layout: layoutReducer,
  category: categoryReducer
});
