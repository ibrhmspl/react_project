import axios from "axios";

export const login =  (email, password)=> {
  return axios
    .post('https://projectone.proxolab.com/api/auth/login', {email,password })
    .then(function (response) {
    console.log(response);
    let token = response.data.authorization.token.token;
    let user = response.data.user;
    localStorage.setItem('token', token);
    localStorage.setItem('userName',user.name)
    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
} 

export const logout =() =>{
  let token = localStorage.getItem('token')
  return axios
    .post('https://projectone.proxolab.com/api/logout',{},{
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(function (response) {
    console.log(response);
    localStorage.removeItem('token');
}).catch(function (error) {
  console.log(error);
  console.log("hata");
});
}
