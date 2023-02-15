const emojisE1 = document.querySelectorAll(".emojis");

const btnE1 = document.getElementById("btn");

const containerE1 = document.getElementById("container-all");

let selectedrating = "";

emojisE1.forEach((emoji) => {

    emoji.addEventListener("click", (event) => {
        removeActive();
        selectedrating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
 });

});

function removeActive(){
    emojisE1.forEach((emoji) => {
        emoji.classList.remove("active");
    });
};

btnE1.addEventListener(("click"), ()=> {
    if(selectedrating !== "") {
        containerE1.innerHTML = 
        `<strong>Thank You!!</strong>
        <br></br>
        <br></br>
        <strong> Feedback: ${selectedrating}
        <p>We will use you feedback to improve our customer support.</p>`;
    }
})