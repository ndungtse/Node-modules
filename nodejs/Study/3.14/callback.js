console.log("Before");
getUser(1, (user) => {
  console.log(user);
  getRepositories(user.gitHubUsername, (repos) => {
    console.log(repos);
    getCommits(repos.repos[0], (commit) => {
        console.log(commit);
    })
  });
});

function getUser(id, callback) {
  setTimeout(() => {
    callback({ id: id, gitHubUsername: "Mwiz" });
  }, 2000);
}
function getRepositories(username, callback) {
  setTimeout(() => {
    callback({ id: username, repos: [1, 2, 3] });
  }, 2000);
}
function getCommits(repos, callback) {
    setTimeout(() => {
        callback({ repo: repos, commits: ["added callbacks", "removed callbacks", "finally worked"] });
      }, 2000);
}
console.log("After");