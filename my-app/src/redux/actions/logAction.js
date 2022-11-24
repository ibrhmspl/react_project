import * as logService from "../services/logService";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";

export function loginSuccess(data){
    return {type:LOGIN_SUCCESS, payload:data}
}
export function loginfail(data){
    return {type:LOGIN_FAIL}
}
export function logoutSuccess(){
    return {type:LOGOUT}
}

export const login = (email,password) => (dispatch) => {
    return logService.login(email, password).then(
        (data) => {
            console.log(data);
            dispatch(loginSuccess(data));
          ;
        }
    );
}

export const logout = () => (dispatch) => {
    return logService.logout().then(
        () => {
            dispatch(logoutSuccess());
          ;
        }
    );
  };

