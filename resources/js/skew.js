/* Crea tu propia lógica para hacer un efecto de tilting o skew cuando se hace scroll en pantalla */


const content = document.querySelector(".skew-me");
const maxSkew = 20;
const maxRotate = 10;

let currentPosition = window.scrollY;

function skewEffect(){
    const newPosition = window.scrollY;
    const dif = newPosition - currentPosition;

    let skew = dif*.01;
    let rotate = dif*.2;

    if (skew > maxSkew || skew < -maxSkew) {
        if (skew > 0) {
            skew = maxSkew;
        } else {
            skew = -maxSkew;
        }
    }

    if (rotate > maxRotate || rotate < -maxRotate) {
        if (rotate > 0) {
            rotate = maxRotate;
        } else {
            rotate = -maxRotate;
        }
    }

    content.style.transform = `skewY(${skew}deg) rotateY(${rotate}deg)`;

    currentPosition = newPosition;
    requestAnimationFrame(skewEffect);

}

skewEffect();