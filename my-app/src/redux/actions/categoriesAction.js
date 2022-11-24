import * as categoriesServices from "../services/categoriesServices";

export const POST_CATEGORIES = "POST_CATEGORIES";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const PUT_CATEGORIES = "PUT_CATEGORIES";
export const DELETE_CATEGORIES= "DELETE_CATEGORIES";

export function getCategoriesSuccess(data){
    return {type:GET_CATEGORIES, payload:data}
}
export function postCategoriesSuccess(data){
    return {type:POST_CATEGORIES, payload:data}
}
export function putCategoriesSuccess(data){
    return {type: PUT_CATEGORIES, payload:data}
}
export function deleteCategoriesSuccess(data){
    return {type: PUT_CATEGORIES, payload:data}
}


export const getcategories = () => (dispatch) => {
    return categoriesServices.categories().then(
        (data) => {
            dispatch(getCategoriesSuccess(data.data));
          ;
        }
    );
};
export const postcategories = (name) => (dispatch) => {
    return categoriesServices.postCategories(name).then(
        (data) => {
            dispatch(postCategoriesSuccess(data.data));
          ;
        }
    );
};

export const putcategories = (category_id, name) => (dispatch) =>{
    return categoriesServices.putCategories(category_id, name).then(
        (data) => {
            dispatch(putCategoriesSuccess(data.data));
        }
    )
}
export const deletecategories = (category_id) => (dispatch) =>{
    return categoriesServices.deleteCategories(category_id).then(
        (data) => {
            dispatch(deleteCategoriesSuccess(data.data));
        }
    )
}