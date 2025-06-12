<<<<<<< Updated upstream
let deleter = document.getElementById("deletetext");
let deleted = false;
=======
<<<<<<< Updated upstream
=======
let deleter = document.getElementById("deletetext");
let deleted1 = false;
>>>>>>> Stashed changes

let Terra = document.getElementById("Terragrigia");
let Javier = document.getElementById("Javier");
let RER = document.getElementById("RER");
let RER2 = document.getElementById("RER2");

<<<<<<< Updated upstream


deleter.addEventListener('click', ()=>{
if (deleted==false) {
    deleted = true;
=======
deleter.addEventListener('click', ()=>{
if (deleted1==false) {
    deleted1 = true;
>>>>>>> Stashed changes
    RER.style.display = 'none';
    Terra.style.display = 'none';
    Javier.style.display = 'none';
    RER2.style.display = 'none';
<<<<<<< Updated upstream
} else {
    deleted = false;
=======
    deleter.style.backgroundColor = "orange";
} else {
    deleted1 = false;
>>>>>>> Stashed changes
    RER.style.display = 'contents';
    Terra.style.display = 'contents';
    Javier.style.display = 'contents';
    RER2.style.display = 'contents';
<<<<<<< Updated upstream
}
})
=======
    deleter.style.backgroundColor = "red";
}
})

let deleter2 = document.getElementById("deletedisclaimer");
let Disclaimer = document.getElementById("Disclaimer2");
let deleted2 = false;
deleter2.addEventListener('click', ()=>{
if (deleted2==false) {
    deleted2 = true;
    Disclaimer.style.display = 'none';
    deleter2.style.backgroundColor = "orange";
} else {
    deleted2 = false;
    Disclaimer.style.display = 'contents';
    deleter2.style.backgroundColor = "red";
}
})
>>>>>>> Stashed changes
>>>>>>> Stashed changes
