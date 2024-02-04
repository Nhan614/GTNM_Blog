const content = document.querySelector(".content");
const btnPopup = document.querySelector(".btnlogin");
const btnClose = document.querySelector(".icon-lose");


btnPopup.addEventListener("click", ()=> {
    content.classList.add("active-popup");
});

btnClose.addEventListener("click", ()=> {
    content.classList.remove("active-popup");
});