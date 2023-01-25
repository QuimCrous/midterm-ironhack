/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

let projectArray = document.querySelectorAll(".project");
let projectData = fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json()).then((res) => {
    projectArray[0].querySelector("h3").innerText = res[0].title;
    projectArray[0].querySelector("p").innerText = res[0].body;
    projectArray[0].querySelector("a").href = "./project.html?slug=" + slugify( res[0].title);

    projectArray[1].querySelector("h3").innerText = res[1].title;
    projectArray[1].querySelector("p").innerText = res[1].body;
    projectArray[1].querySelector("a").href = "./project.html?slug=" + slugify(res[1].title);

    projectArray[2].querySelector("h3").innerText = res[2].title;
    projectArray[2].querySelector("p").innerText = res[2].body;
    projectArray[2].querySelector("a").href = "./project.html?slug=" + slugify(res[2].title);

}).catch((err) => console.log(err))

let scroll = document.querySelector(".scroll");

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scroll.addEventListener("click", scrollToTop);

let scrollToProject = document.querySelector(".scrollToProject");

const scrollToProjectFunction = () => {
    window.scrollTo({
        top: 1200,
        behavior: "smooth"
    })
}

scrollToProject.addEventListener("click", scrollToProjectFunction);


let scrollToServices = document.querySelector(".scrollToServices");

const scrollToServicesFunction = () => {
    window.scrollTo({
        top: 2700,
        behavior: "smooth"
    })
}

scrollToServices.addEventListener("click", scrollToServicesFunction);



function slugify(text) {
    return text.toString().toLowerCase().trim()
      .normalize('NFD') 				 // separate accent from letter
      .replace(/[\u0300-\u036f]/g, '') // remove all separated accents
      .replace(/\s+/g, '-')            // replace spaces with -
      .replace(/&/g, '-and-')          // replace & with 'and'
      .replace(/[^\w\-]+/g, '')        // remove all non-word chars
      .replace(/\-\-+/g, '-')          // replace multiple '-' with single '-'
  }