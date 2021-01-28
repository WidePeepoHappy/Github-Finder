class GitHub {
  constructor() {
    this.config = {
      headers: {
        Authorization: 'token ee1cd9c6f30266b4401e2d5ed8ddca6f562721e0'
      }
    }
    this.repos_count = 5;
    this.repos_count_sort = 'created: asc'
  }
  
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`, this.config);

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`, this.config
    )

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}
