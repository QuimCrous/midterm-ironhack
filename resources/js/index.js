/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

let projectArray = document.querySelectorAll(".project");
let projectData = fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json()).then((res) => {
    projectArray[0].querySelector("h3").innerText = res[0].title;
    projectArray[0].querySelector("p").innerText = res[0].body;

    projectArray[1].querySelector("h3").innerText = res[1].title;
    projectArray[1].querySelector("p").innerText = res[1].body;

    projectArray[2].querySelector("h3").innerText = res[2].title;
    projectArray[2].querySelector("p").innerText = res[2].body;

}).catch((err) => console.log(err))



