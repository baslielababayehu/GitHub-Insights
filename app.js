

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
        display.showRepository(data.repos);
      }
    }else {
      display.clearProfile(); 
    }

  });

};

genericUser = new GitHubUser();

document
  .getElementById('profile-search')
  .addEventListener('keyup', searchForUser);


