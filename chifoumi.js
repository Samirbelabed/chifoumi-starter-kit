
const tableauResultat = ["rien","rien"];


let left = document.getElementById('gauche');
let right = document.getElementById('droite');

let imgleft = document.getElementById('image-gauche');
let imgright = document.getElementById('image-droite');


let resleft = document.getElementById('resultat-gauche');
let resright =document.getElementById('resultat-droite');

console.log(ChoixOrdinateur());





function ChoixOrdinateur(){
const choix = ['pierre', 'feuille', 'ciseau'];
const choixAleat = choix[Math.floor(Math.random()*choix.length)];
return choixAleat;


};



imgleft.addEventListener('click', () => {

let choixgauche = ChoixOrdinateur();
imgleft.style.backgroundImage = `url(images-pfc/${choixgauche}.jpg)`;
tableauResultat[0]= choixgauche;
deterwinner()
});



imgright.addEventListener('click', () => {

    let choixdroit = ChoixOrdinateur();
    imgright.style.backgroundImage = `url(images-pfc/${choixdroit}.jpg)`;
    tableauResultat[1]= choixdroit;
    deterwinner()
    });








function deterwinner() {

if (tableauResultat[0] == tableauResultat[1]) {

console.log("Egalité!");


} 
};









