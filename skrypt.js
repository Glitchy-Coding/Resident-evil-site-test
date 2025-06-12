let deleter = document.getElementById("deletetext");
let deleted = false;

let Terra = document.getElementById("Terragrigia");
let Javier = document.getElementById("Javier");
let RER = document.getElementById("RER");
let RER2 = document.getElementById("RER2");



deleter.addEventListener('click', ()=>{
if (deleted==false) {
    deleted = true;
    RER.style.display = 'none';
    Terra.style.display = 'none';
    Javier.style.display = 'none';
    RER2.style.display = 'none';
} else {
    deleted = false;
    RER.style.display = 'contents';
    Terra.style.display = 'contents';
    Javier.style.display = 'contents';
    RER2.style.display = 'contents';
}
})