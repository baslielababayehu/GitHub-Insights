// require('dotenv').config();
// console.log(process.env);

let user = new GitHubUser();
let display = new Display();

let searchForUser = (e) => {
  console.log(e.target.value);
  let username = e.target.value;
  user.getUser(username).then((data) => {
    if (username != ''){
      if (data.profileData.message === 'Not Found') {
        //show alert
        console.log(data.profileData.message); 
        display.showAlert('User not Found', 'alert alert-danger'); 
      } else {
        //show profile
        display.showprofile(data.profileData);
        display.showRepository(data.profileData);
      }
    }else {
      display.clearProfile(); 
      console.log("This Works")
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
