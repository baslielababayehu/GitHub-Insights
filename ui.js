class Display {
  constructor() {
    this.profile = document.querySelector('.display-profile');
    this.lastFiveRepos = document.querySelector('.display-recent-repos');
  }
  showprofile(username) {
    this.profile.innerHTML = `
  <div class="col-12">
    <div class="row border border-primary m-1 p-1" style="border-radius: 4px; background-color: white;">
      <div class="" style="height: auto; width: 10%; min-width:100px;">
        <img
          class="img-fluid"
          src="${username.avatar_url}"
          alt=""
          style="height: auto; width: 20%; min-width:110px;"
        />
      </div>
      <div class=" col-auto quick-stats-1">
        <ul class="section-1-features" style="list-style: none;">
        <li>Name:</i><span class="badge" style="border-radius: 3px; background-color: #1DB954">${username.name} </span></li>
          <li>Public Repos:</i><span class="badge" style="border-radius: 3px; background-color: #1DB954">${username.public_repos} </span></li>
          <li>Public Gists:</i><span class="badge" style="border-radius: 3px; background-color: #1DB954">${username.public_gists} </span></li>
          <li>Followers:</i><span class="badge" style="border-radius: 3px; background-color: #1DB954">${username.followers} </span></li>


        </ul>
      </div>
      <div class="col-5 quick-stats-2"> 
      <button type="button" class="mt-4 btn btn-primary btn-block" style="border-radius: 15px; margin: auto;">View Full Profile</button>
      </div>
    </div>
  </div>
  <h4 class="m-2">Latest Repositories</h4>
    
    `;
  }
  showRepository(repos) {
    let output = ''; 

    repos.forEach(function(repo){
      output += ` 
      <div class="col-12">
      <div class="row border border-primary m-1 p-1" style="border-radius: 4px; background-color: #191414; opacity: 0.75">
    <div class=" col-auto quick-stats-1">
    <h5 style="color: white">${repo.name} </h5> <h7 style="color: white">Description: ${repo.description}</h7>
      <ul class="section-1-features" style="list-style: none; color: white">
        <li>Stars:</i><span class="badge" style="border-radius: 3px; background-color: #1DB954">${repo.stargazers_count} </span></li>
        <li>Watchers:</i><span class="badge" style="border-radius: 3px; background-color: #1DB954">${repo.watchers} </span></li>
        <li>Forks:</i><span class="badge" style="border-radius: 3px; background-color: #1DB954">${repo.forks} </span></li>
      </ul>
    </div>
    <div class="col-5 quick-stats-2"> 
    </div>
  </div>
</div>`
    })

    this.lastFiveRepos.innerHTML = output;
  }
  // Clear profile
  clearProfile() {
    this.profile.innerHTML = ''; 
    this.lastFiveRepos.innerHTML = ''; 
  }
  showAlert(message, className) {
    //clear remaing alerts
    this.clearAlert(); 
    //create a div 
    const div = document.createElement('div'); 

    //add the class to the div
    div.className = className; 
    //create a text node 
    div.appendChild(document.createTextNode(`${message}`))

    const searchContainer = document.querySelector('.search-container'); 
    searchContainer.appendChild(div); 

    //timeout after 3 seconds 
    setTimeout(() => {
      this.clearAlert(); 
    }, 3000)
    
  }
  clearAlert (){
    //get alert 
    const alert = document.querySelector('.alert'); 
    if(alert){
      alert.remove();
    }
  }

}


