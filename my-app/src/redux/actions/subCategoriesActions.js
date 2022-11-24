import * as subCategoriesServices from "../services/subCategoriesServices";

export const POST_SUBCATEGORIES = "POST_SUBCATEGORIES";
export const GET_SUBCATEGORIES = "GET_SUBCATEGORIES";
export const PUT_SUBCATEGORIES = "PUT_SUBCATEGORIES";
export const DELETE_SUBCATEGORIES= "DELETE_SUBCATEGORIES";

export function getSubCategoriesSuccess(data){
    return {type:GET_SUBCATEGORIES, payload:data}
}
export function postSubCategoriesSuccess(data){
  return {type:POST_SUBCATEGORIES, payload:data}
}
export function putSubCategoriesSuccess(data){
  return {type:PUT_SUBCATEGORIES, payload:data}
}
export function deleteSubCategoriesSuccess(data){
  return {type:PUT_SUBCATEGORIES, payload:data}
}

export const getsubcategories = () => (dispatch) => {
    return subCategoriesServices.subCategories().then(
        (data) => {
            dispatch(getSubCategoriesSuccess(data.data));
          ;
      }
  );
};
export const postsubcategories = (category_id,name) => (dispatch) => {
  return subCategoriesServices.postSubCategories(category_id,name).then(
      (data) => {
          dispatch(postSubCategoriesSuccess(data.data));
      }
  );
};

export const putsubcategories = (sub_category_id,category_id, name) => (dispatch) =>{
  return subCategoriesServices.putSubCategories(sub_category_id,category_id, name).then(
      (data) => {
          dispatch(putSubCategoriesSuccess(data.data));
      }
  )
}
export const deletesubcategories = (sub_category_id) => (dispatch) =>{
  return subCategoriesServices.deleteSubCategories(sub_category_id).then(
      (data) => {
          dispatch(deleteSubCategoriesSuccess(data.data));
      }
  )
}