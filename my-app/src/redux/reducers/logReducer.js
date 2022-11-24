export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";


const initialState =  {
    user:{email:"",  password:""},
}
const logReducer =(state=initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            
            return {
                ...state ,
                user:action.user,
            };
    
            case LOGIN_FAIL:
            
            return {
                ...state ,
                user:"",
            };
            case LOGOUT:
                return {
                    user:"",
                }
            
        default:
            return state;
    }
}

export default logReducer;