console.log("Working");

// async await function

// async function getMyStuffFromOverThere() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   console.log("HTTP Response:", response);
//   const json = await response.json();
//   console.log("JSON Data:", json);
// }
//

//then method

function getMyStuffFromOverThere() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function (response) {
      console.log("HTTP Response:", response);
      return response.json();
    })
    .then(function (json) {
      console.log("JSON Data:", json);
    });
}

//getMyStuffFromOverThere();

//Parsing the responce

//using async await

async function fetchGitHubData() {
  const owner = "gabaal";
  const repo = "ToDoList";

  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  const data = await response.json();
  console.log("Data:", data);
  const stargazersCount = data.stargazers_count;
  document.getElementById("stargazersCount").textContent = stargazersCount;
}
fetchGitHubData();
//using then

// const owner = "gabaal";
// const repo = "ToDoList";

// fetch(`https://api.github.com/repos/${owner}/${repo}`)
//   .then((response) => response.json())
//   .then((data) => {
//     // Data contains information about the repository
//     const stargazersCount = data.stargazers_count;

//     // Update the HTML content
//     document.getElementById("stargazersCount").textContent = stargazersCount;
//   })
//   .catch((error) => {
//     console.error("Error fetching data from GitHub API:", error);
//   });
