/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */

let getData = (e) => {
    
    let userName = document.querySelector("#formName").value;
    let mail = document.querySelector("#email-id").value;
    let phone = document.querySelector("#phone").value;
    let message = document.querySelector("#message").value;

    if (!userName || !message) {
        //alert("Tienes que poner introducir tu nombre y el mensaje")
    } else {

    document.querySelector("#formName").value = "";
    document.querySelector("#email-id").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#message").value = "";

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
        title: `${userName} ${mail}`,
        body: message,
        userId: phone,
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
    }
    
    )
    .then((response) => response.json())
    .then((json) => console.log(json)).then(() => activate()).then(() => desactivate());
}}

document.querySelector("#submit-button").addEventListener("click", function (e) {
    getData(e)
} )

const successMessage = document.querySelector(".success-message");

const activate = () => {
    console.log("patata");
    successMessage.style.display = "flex";
}

const desactivate = () => {setTimeout(() => {
    successMessage.style.display = "none";
},5000)};