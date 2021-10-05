const button = document.querySelector("button");
const img = document.querySelector("img");
const p = document.querySelector("p");

const cara = "cara.png";
const coroa = "coroa.png";

randomize();

button.addEventListener("click", randomize);

function randomize() {
    let valueGot = Math.round(Math.random());
    
    if (valueGot == 0) {
        img.src = cara;
        p.innerHTML = "Cara";
    }
    else {
        img.src = coroa;
        p.innerHTML = "Coroa";
    }
}
