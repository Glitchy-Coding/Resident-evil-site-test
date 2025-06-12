let deleter = document.getElementById("deletetext");
let deleted = false;

let Terra = document.getElementById("Terragrigia");
let Javier = document.getElementById("Javier");
let RER = document.getElementById("RER");
let RER2 = document.getElementById("RER2");



deleter.addEventListener('click', ()=>{
if (deleted==false) {
    deleted = true;
    RER.style.visibility = 'hidden';
    Terra.style.visibility = 'hidden';
    Javier.style.visibility = 'hidden';
    RER2.style.visibility = 'hidden';
}
if (deleted==true) {
    deleted = false;
    RER.style.visibility = 'visible';
    Terra.style.visibility = 'visible';
    Javier.style.visibility = 'visible';
    RER2.style.visibility = 'visible';
}
})