import axios from "axios";

export const subCategories = () => {
    let token = localStorage.getItem('token');
    return axios
    .get('https://projectone.proxolab.com/api/subCategories',{
        headers: { Authorization: `Bearer ${token}` }
      })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    });
}
export const postSubCategories =  (category_id,name)=> {
  let token = localStorage.getItem('token')
  return axios
    .post('https://projectone.proxolab.com/api/subCategory', {category_id,name},{
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(function (response) {

    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
}
export const putSubCategories =  (sub_category_id,category_id,name)=> {
  let token = localStorage.getItem('token')
  return axios
    .put('https://projectone.proxolab.com/api/subCategory', {sub_category_id,category_id,name},{
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(function (response) {

    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const deleteSubCategories =  (sub_category_id)=> {
  let token = localStorage.getItem('token')
  return axios
    .delete('https://projectone.proxolab.com/api/subCategory', {sub_category_id},{
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(function (response) {

    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
}