class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-mb-3>
           <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primry btn-block mb-4">View Pofole</a>
          </div>
          <div class="col-mb-9>
            <span class="badge badge-primary">Public Repos: ${user.public_repons}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.followers}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show user repos
  showRepos(repos) {
    let output = "";

    repos.forEach(function (repo) {
      output += `
       <div class="card card-body mb-2">
         <div class="row">
          <div class="col-mb-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
           </div>
           <div class="col-mb-6">
           <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
           <span class="badge badge-secondary">Watchers: ${repo.wachers_count}</span>
           <span class="badge badge-secondary">Forks: ${repo.forms_count}</span>
           </div>
         </div>
       </div>
      `;
    });

    // Output repos
    document.getElementById("repos").innerHTML = output;
  }

  // Show alert message
  showAlert(message, className) {
    // Cleaar any remaining alers
    this.clearAlert();
    // crete div
    const div = document.createElement("div");
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector(".searchContainer");
    // Get sears=ch box
    const search = document.querySelector(".search");
    // Insert alert
    container.insertBefore(div, search);

    // Timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // clear profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
