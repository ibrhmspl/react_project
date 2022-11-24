export const POST_CATEGORIES = "POST_CATEGORIES";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const PUT_CATEGORIES = "PUT_CATEGORIES";
export const DELETE_CATEGORIES= "DELETE_CATEGORIES";
  
  const initialState = [];
  
  const categoriesReducer = (categories = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case POST_CATEGORIES:
        return [...categories, payload];
    case GET_CATEGORIES:
         return payload;
      case PUT_CATEGORIES:
        return categories.map((category) => {
          if (category.id === payload.id) {
            return {
              ...category,
              ...payload,
            };
          } else {
            return category;
          }
        });
  
      case DELETE_CATEGORIES:
        return categories.filter(({ id }) => id !== payload.id);
  
      default:
        return categories;
    }
  };
  
  export default categoriesReducer;