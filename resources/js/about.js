/* Crea tu propia lógica para cambiar la info de About Page a través de DOM manipulation */

const myName = document.querySelector(".card-back h4");
const town = document.querySelector(".location");
const biography = document.querySelector(".biography");

let getJson = () => {
    fetch("/resources/js/user.json")
      .then((response) => response.json())
      .then((res) => {
        myName.innerText = res.name;
        town.innerText = res.location;
        biography.innerText = res.biography;
        
      })
      .catch((error) => console.log(error));
  };
  
window.addEventListener("load", getJson)