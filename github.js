class GitHubUser {
  constructor() {
    this.client_id = process.env.API_ID;
    this.client_secret = process.env.API_secret;
    this.name = name;
  }
  get numberOfForks() {
    // new Promise(reseolve);
    let forks = 'will get forks using API';
    return forks;
  }

  async getUser(username) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profileData = await profileResponse.json();
    return {
      profileData,
    };
  }
}
