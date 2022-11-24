export const POST_SUBCATEGORIES = "POST_SUBCATEGORIES";
export const GET_SUBCATEGORIES = "GET_SUBCATEGORIES";
export const PUT_SUBCATEGORIES = "PUT_SUBCATEGORIES";
export const DELETE_SUBCATEGORIES= "DELETE_SUBCATEGORIES";
  
  const initialState = [];
  
  const subCategoriesReducer = (subCategories = initialState, action)=> {
    const { type, payload } = action;
  
    switch (type) {
      case POST_SUBCATEGORIES:
        return [...subCategories, payload];
    case GET_SUBCATEGORIES:
         return payload;
      case PUT_SUBCATEGORIES:
        return subCategories.map((subCategory) => {
          if (subCategory.id === payload.id) {
            return {
              ...subCategory,
              ...payload,
            };
          } else {
            return subCategory;
          }
        });
  
      case DELETE_SUBCATEGORIES:
        return subCategories.filter(({ id }) => id !== payload.id);
  
      default:
        return subCategories;
    }
  };
  
  export default subCategoriesReducer;