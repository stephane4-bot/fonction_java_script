
let som=0;


// methode 01 :-------- fonction global---

function add1 (a,b){
 som = a + b ;
  return som; 
}
// result = add1(5,7);
// console.log(result);      
// methode 02 :----- fonction global---

function add1 (a,b){
 return a + b 
}
//result = add1(5,7);
//console.log(result); 
// methode 03 :----- fonction global---

let add3 = function (a,b){
 return a + b 
   }

   // methode 04 :----- fonction flechee---
   

    add4 =  (a,b) =>{
 return a + b 
   }

    // methode 05 :----- fonction flechee---
   

   let add5 =  (a,b) => a + b
result  = add4(14,7);
//console.log(result);

 let clickbutton =document.querySelector('button')
 console.log(clickbutton);


// SYNTAXE 
// clickbutton.addeventlistener('event, "fdonction flechee")

clickbutton.addEventListener('click',
  ()=> {
     alert ('click sur le bouton');

})

 let clickclass = document.querySelector('.btn1')
 console.log(clickclass);


clickclass.addEventListener('click',
  ()=> {
     alert ('click sur le bouton');

})
 let clickid = document.querySelector('#btn2')
 console.log(clickid);


clickid.addEventListener('click',
  ()=> {
     alert ('click sur le bouton');

})


 
 

 

//  CLICK : SE DECLEnche  L'osque lutilisateur clique sur un element 
//  mouseover : se produit losque l'utilisateur survolee sur un element  avec la souris
//   mouseout :se produit losque un ulisateur quitte un element avec la souris 
//   keydown:  e declanche losque une touche du clavier est enfoncer 
//   keyup: se declanche losqune toucche de clavier est relacher
//   subimit: se produit losque le formulaire est soumis 
//   load : se declanche losque la la page ou un elemeent est completement charger 
//   resize: se declare losque une fenetre est redimensionnee 
//   scroll : se produit losque  l'oerqu'un utilisateur  fait defiler  une pâge ou un element 
