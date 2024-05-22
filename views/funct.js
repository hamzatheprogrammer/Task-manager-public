let vtask = document.querySelector(".v-task");
let mainbox = document.querySelector(".main-box");
let sectask = document.querySelector(".sec-box");
let backbtn = document.querySelector(".back-btn");

backbtn.style.display = "none"
sectask.style.display = "none"

vtask.addEventListener("click", ()=>{
    mainbox.style.display = "none";
    sectask.style.display = "flex";
    backbtn.style.display = "block";
})
backbtn.addEventListener("click", ()=>{
    mainbox.style.display = "flex";
    backbtn.style.display = "none"
})
