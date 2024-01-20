let loginPage = document.getElementById("loginPage");
let content = document.getElementById("content");
let table = document.getElementById("table");

function openLogin() {
  loginPage.classList.remove("d-none");
  content.classList.add("d-none");
  table.classList.add("d-none");
}

function openHome() {
  content.classList.remove("d-none");
  loginPage.classList.add("d-none");
  table.classList.add("d-none");
}

function openTable() {
  content.classList.add("d-none");
  loginPage.classList.add("d-none");
  table.classList.remove("d-none");
}
