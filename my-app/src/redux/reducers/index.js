import { combineReducers } from "redux";
import logReducer from "./logReducer";
import categoriesReducer from "./categoriesReducer";
import subCategoriesReducer from "./subCategoriesReducers";

const rootReducer = combineReducers({
    logReducer,
    categoriesReducer,
    subCategoriesReducer
})

export default rootReducer