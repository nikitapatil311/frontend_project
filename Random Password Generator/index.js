const btne1 = document.querySelector(".button");

const inputE1 = document.getElementById("input");

const copyicone1 = document.querySelector(".fa-copy");

const alertE1 = document.querySelector(".alert");

copyicone1.addEventListener("click", () => {
    copypassword();

    if(inputE1.value){ alertE1.classList.remove("active");

    setTimeout( () => {
        alertE1.classList.add("active");

    }, 2000);
}
   
});

btne1.addEventListener("click", () => {

    updatepassword();


});

function updatepassword(){
    const chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+<>:[]ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    const passwordlength = 14;

let password = "";

for (let index = 0; index < passwordlength; index++) {

    const randomnumber = Math.floor(Math.random()*chars.length);
    password = password+ chars.substring(randomnumber, randomnumber+1);

   
    
}
inputE1.value = password;
alertE1.innerText = password + "copied!" ;

}

function copypassword(){
    inputE1.select();
    inputE1.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputE1.value);
    
}