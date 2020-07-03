require('dotenv').config();
// console.log(process.env);

let user = new GitHubUser();

let searchForUser = (e) => {
  console.log(e.target.value);
  let username = e.target.value;
  user.getUser(username).then((data) => {
    if (data.profileData.message === 'Not Found') {
      //throw an error message
      console.log('User not Found!!');
    } else {
      //show profile
      console.log(data.profileData);
    }
  });
};

genericUser = new GitHubUser();
//search for a user
// document.getElementById('search-button').addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(Bas.name);
// });
document
  .getElementById('profile-search')
  .addEventListener('keyup', searchForUser);

// console.log
