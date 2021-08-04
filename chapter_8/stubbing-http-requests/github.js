const fetch = require('node-fetch');
const getGitHubUser = (username) => {
  return fetch('https://api.github.com/users/' + username)
    .then((res) => res.json())
    .then((json) => {return json; });
}; 

module.exports = {getGitHubUser};