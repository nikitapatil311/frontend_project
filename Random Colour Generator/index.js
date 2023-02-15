const containere1 = document.querySelector(".container");


for (let index = 0; index < 30; index++) {
    const colorContainere1  = document.createElement("div");
    colorContainere1.classList.add(".color-container");
    colorContainere1.appendChild(colorContainere1);
}

const colorContainere1s = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
    colorContainere1s.forEach((colorContainere1)=>{
    const newColorCode = randomColor();
 colorContainere1.style.backgroundColor = "#" + newColorCode;
 colorContainere1.innerText = "#" + newColorCode;

    });
}

function randomColor(){

    const chars = "0123456789abcdef";
    const colorCodeLength = 6;

    let colorcode = "";

    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor( MAth.random() * chars.length);
        
      color += chars.substring(randomNum +1);
      console.log(colorcode + randomNum);
     }
        return colorcode;
} 