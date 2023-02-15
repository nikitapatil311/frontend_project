const num1 = Math.ceil(Math.random()*10);

const num2 = Math.ceil(Math.random()*10);

const questionE1 = document.getElementById("question");

const inpute1  = document.getElementById("input");

const forme1 = document.getElementById("form");

const scoree1 = document.getElementById("score");

let score = JSON.parse (localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoree1.innerText = `score: ${score}`

questionE1.innerText = `What is  ${num1} multiplied by ${num2} ?`

const correctans = num1*num2;

forme1.addEventListener("submit", ()=>{

    const userans = +inpute1.value ;

if(userans === correctans){
 score++;
updatelocalStroage()
}
else{
    score--;
    updatelocalStroage();
}
});

function updatelocalStroage(){
    localStorage.setItem("score", JSON.stringify(score));
}
