
const Jeu = document.querySelector("#jeu");
const Btn = document.querySelector("#boutonRejouer");

const Chjeu1 = new Chifoumi();
const Chjeu2 = new Chifoumi();



Jeu.appendChild(Chjeu1.getHtml());
Jeu.appendChild(Chjeu2.getHtml());



function deterwinner() {
    Chifoumi.Resultat(Chjeu1, Chjeu2);
};


























































































/*
console.log(ChoixOrdinateur());





function ChoixOrdinateur() {

const choix = ['pierre', 'feuille', 'ciseau'];
const choixAleat = choix[Math.floor(Math.random()*choix.length)];



return choixAleat;


};



imgleft.addEventListener('click', () => {

let choixgauche = ChoixOrdinateur();
imgleft.style.backgroundImage = `url(images-pfc/${choixgauche}.jpg)`;
tableauResultat[0]= choixgauche;
imgleft.style.pointerEvents = 'none';

deterwinner();


});



imgright.addEventListener('click', () => {

    let choixdroit = ChoixOrdinateur();
    imgright.style.backgroundImage = `url(images-pfc/${choixdroit}.jpg)`;
    tableauResultat[1]= choixdroit;
    imgright.style.pointerEvents = 'none';
   
    deterwinner();
 

    
    });





let rejouer = document.getElementById('boutonRejouer').addEventListener('click', depart);

function depart () {


imgleft.style.backgroundImage = 'url(images-pfc/depart.jpg)';
imgright.style.backgroundImage = 'url(images-pfc/depart.jpg)';
left.style.backgroundColor = 'gray';
right.style.backgroundColor = 'gray';
imgleft.style.pointerEvents = 'auto';
imgright.style.pointerEvents = 'auto';


console.clear();


};



function deterwinner() {

    if (tableauResultat[0] === tableauResultat[1]) {
    
    console.log("Egalité!");
    left.style.backgroundColor = 'orange';
    right.style.backgroundColor = 'orange';
    
    
} else if (tableauResultat[0] === 'pierre' && tableauResultat[1] === 'ciseau'||
        tableauResultat[0] === 'ciseau' && tableauResultat[1] === 'feuille'||
        tableauResultat[0] === 'feuille' && tableauResultat[1] === 'pierre')
    {
    
        left.style.backgroundColor = 'green';
        right.style.backgroundColor = 'red';
       
        console.log("Joueur 1 à gagné");
       
    
    }  else {
    
    
    left.style.backgroundColor = 'red';
    right.style.backgroundColor = 'green';
    
    console.log("Joueur 2 à gagné");
    
    }

};

*/


























