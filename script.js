// Fetch and display GitHub profile info
const githubUsername = "vriinda"; // Set to your GitHub username

async function fetchGitHubProfile() {
    const response = await fetch(`https://api.github.com/users/${githubUsername}`);
    if (!response.ok) {
        document.getElementById("profile").innerHTML = "Failed to load profile.";
        return;
    }
    const data = await response.json();
    document.getElementById("profile").innerHTML = `
        <img src="${data.avatar_url}" alt="Profile Picture" width="120" style="border-radius:50%"><br>
        <h2>${data.name}</h2>
        <p>@${data.login}</p>
    `;
}

document.addEventListener("DOMContentLoaded", fetchGitHubProfile);

