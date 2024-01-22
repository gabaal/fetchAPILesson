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

async function getGitHub() {
  const response = await fetch("https://api.github.com/repos/gabaal/ToDoList");
  console.log("HTTP Response:", response);
  const json = await response.json();
  console.log("JSON Data:", json);
}
getGitHub();
