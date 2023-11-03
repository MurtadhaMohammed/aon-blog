// let logoElem = document.getElementById("logo")
// logoElem.innerHTML = "<i>No</i>"
// logoElem.style.color = "red"
// console.log(logoElem.innerHTML)

let logoElem = document.getElementById("logo");
let headerElem = document.getElementById("mainHeader");

let onLogoClick = () => {
  headerElem.style.backgroundColor = "red";
};

logoElem.addEventListener("click", onLogoClick);
