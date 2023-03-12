// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * @typeDef {object} User
 * @property {string} name
 * @property {string} email
 * @property {string} address
 */

/**
 * 
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url)

}

fetchUser().then(function (response) {
  response
})
function startApp() {




}

startApp();
