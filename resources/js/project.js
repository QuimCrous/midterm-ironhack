/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */

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
