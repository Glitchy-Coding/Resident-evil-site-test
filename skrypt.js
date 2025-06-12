let deleter = document.getElementById("deletetext");
let deleted = false;

let Terra = document.getElementById("Terragrigia");
let Javier = document.getElementById("Javier");
let RER = document.getElementById("RER");
let RER2 = document.getElementById("RER2");



deleter.addEventListener('click', ()=>{
if (deleted==false) {
    deleted = true;
    Terra.innerHTML = "";
    Javier.innerHTML = "";
    RER.innerHTML = "";
    RER2.innerHTML = "";
} else {
    location.reload();
}
})
