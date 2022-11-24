import axios from "axios";

export const categories = () => {
    let token = localStorage.getItem('token');
    return axios
    .get('https://projectone.proxolab.com/api/categories',{
        headers: { Authorization: `Bearer ${token}` }
      })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const postCategories =  (name)=> {
  let token = localStorage.getItem('token')
  return axios
    .post('https://projectone.proxolab.com/api/category', {name},{
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(function (response) {

    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const putCategories =  (category_id,name)=> {
  let token = localStorage.getItem('token')
  return axios
    .put('https://projectone.proxolab.com/api/category', {category_id,name},{
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(function (response) {

    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const deleteCategories =  (category_id)=> {
  let token = localStorage.getItem('token')
  return axios
    .delete('https://projectone.proxolab.com/api/category', {category_id},{
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(function (response) {

    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
}