class Chifoumi {


    constructor() {

        this.resultat = "rien";
        this.html = this.createHtml();
        

  }

    createHtml() {

        const section = document.createElement('section');

        const image = document.createElement('div');
        image.classList.add("image");

    
        const Resultat = document.createElement('div');
        Resultat.classList.add("resultat");


        
        Jeu.appendChild(section);
        section.appendChild(image);
        section.appendChild(Resultat);
       
       

        const choix = ['pierre', 'feuille', 'ciseau'];


        image.addEventListener('click', () => {


            this.resultat = choix[Math.floor(Math.random() * choix.length)];
            image.style.backgroundImage = `url(./images-pfc/${this.resultat}.jpg)`;
            image.style.pointerEvents = 'none';


    
            if (choix[0] === choix[0] || choix[1] === choix[1] || 
                choix[2] === choix[2]) {
    
                console.log("Egalité!");
                Jeu.style.backgroundColor = 'orange';

                
                } else if (choix[0] === 'pierre' && choix[2] === 'ciseau' ||
                choix[2] === 'ciseau' && choix[1] === 'feuille' ||
                choix[1] === 'feuille' && choix[0] === 'pierre') {
    
                Jeu.style.backgroundColor = 'green';
                
    
    
                console.log("Joueur 1 à gagné");
    
    
            } else {
    
    
                Jeu.style.backgroundColor = 'red';
              
                console.log("Joueur 2 à gagné");
    
            }
    
    
        
        });

        return section;
    
    
    }



    getResultat() {

        return this.resultat;



    }


    getHtml() {

        return this.html;


    }


}


      








     


    
    
    
        
    


    



  







