class Github {
  constructor() {
    this.client_id = "c29dcb15968cc094c4a4";
    this.client_secret = "a52552c5133aba7daeaa416bd270b57443ba4254";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.jons();

    return {
      profile,
      repos,
    };
  }
}
