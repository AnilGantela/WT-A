let loginPage = document.getElementById("loginPage");
let content = document.getElementById("content");
let table = document.getElementById("table");
let nFactorial=document.getElementById("nFactorial");
let Nbutton=document.getElementById("Nbutton");
function openLogin() {
  loginPage.classList.remove("d-none");
  content.classList.add("d-none");
  table.classList.add("d-none");
  nFactorial.classList.add("d-none");
}

function openHome() {
  content.classList.remove("d-none");
  loginPage.classList.add("d-none");
  table.classList.add("d-none");
  nFactorial.classList.add("d-none");
}

function openTable() {
  content.classList.add("d-none");
  loginPage.classList.add("d-none");
  table.classList.remove("d-none");
  nFactorial.classList.add("d-none");
}
function openCal(){
    nFactorial.classList.remove("d-none");
     content.classList.add("d-none");
  loginPage.classList.add("d-none");
  table.classList.add("d-none");
}
function Factorial1(n){
for(let i=0;i<=n;i++){
        if(n<=1){
        return 1;
    }
    else{
        return n*Factorial1(n-1);
    }
}
}

Nbutton.addEventListener("click",function(){
    let n=parseInt(document.getElementById("Ninput").value);
    let ans=Factorial1(n);
    let Nanswer=document.getElementById("Nanswer");
    Nanswer.textContent=ans;
});
