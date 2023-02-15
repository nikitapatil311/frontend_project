const btnE1 = document.getElementById("btn1");

const jokeE1 = document.getElementById("joke");

const ApiKey = "pqpgOzeMHz6FuDQYpJQpLQ==Q7TTHHaOuMo45j9h";

const options ={
    method: "GET" ,
    headers:{
        "X-API-KEY" : ApiKey,
    },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getjoke(){

    try { 
        jokeE1.innerText = "updating ...";
    btnE1.disabled = true;
    btnE1.innerText = "Loading";

const response = await fetch(apiUrl, options);
const data = await response.json();

btnE1.disabled = false;
btnE1.disabled = "Tell me a Joke";

jokeE1.innerText = data[0].joke;
        
    } catch (error) {
        jokeE1.innerText = "An error occured, try again"
        
    }

   


};


btnE1.addEventListener("click", getjoke);

