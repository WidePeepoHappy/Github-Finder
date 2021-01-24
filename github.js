class GitHub {
  constructor() {
    this.config = {
      headers: {
        Authorization: 'token 3b884443fa62e627d98d53fe7c5c52afdf3bf3c5'
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