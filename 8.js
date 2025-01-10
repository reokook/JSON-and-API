const username = "yourusername"; 
const apiUrl = `https://github.com/reokook`;

async function fetchRepoNames() {
  try {
    const response = await fetch(apiUrl);
    const repos = await response.json();
    const repoNames = repos.map((repo) => repo.name);
    console.log("Repository Names:", repoNames);
  } catch (error) {
    console.error("Error fetching repository names:", error);
  }
}

fetchRepoNames();
