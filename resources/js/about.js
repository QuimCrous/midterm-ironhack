/* Crea tu propia lógica para cambiar la info de About Page a través de DOM manipulation */

const myName = document.querySelector(".card-back h4");
const town = document.querySelector(".location");
const biography = document.querySelector(".biography");

let getJson = () => {
    fetch("user.json")
      .then((response) => response.json())
      .then((rickAndMortyInfo) => {
        console.table(rickAndMortyInfo);
        let userData = "";
        rickAndMortyInfo.forEach((infoFromJson) => {
          userData += `
                <ul>
          <li>${infoFromJson.id}</li>
          <li>${infoFromJson.name}</li>
          <li>${infoFromJson.profession}</li>
      </ul>
                `;
        });
        
      })
      .catch((error) => console.log(error));
  };
  
//window.addEventListener("load", getJson)