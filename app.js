const slot = document.querySelector (".slot")
const boutonMilieu = document.querySelector(".bouton-milieu")
const emojis = ["🤑", "💚", "🍀",]

//attends l'evenement click pour declencher la function fiesta
boutonMilieu.addEventListener("click", fiesta)

//function pour que des emojis apparaissent au hasard
function fiesta(){

    if(isTweening()) return;

    //c'est pour choisir le nombre d'emojie qu'on veut / tant que [i] est inferieur a 50 ajoute +1 à [i]
    for(let i = 0; i < 50; i++){
        //on crée un élément dan la div
        const confetti = document.createElement('div');

                            //grace à cette commande on aura eds emojis au hasard
        confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        slot.appendChild(confetti);
    }
    animateConfettis(); //cette function est séparer mais elle est avec la function d'en dessous
}

function animateConfettis(){
    
    const timeLineConfetti = gsap.timeline() //on mets des animations dans la timeline

    timeLineConfetti
    .to(".slot div",{
        y: "random(-100,100)",  //l'axe y verticale
        x: "random(-100,100)", //l'axe x horizontale
        z: "random(0,1000)",  //l'axe z viens vers nous
        rotation: "random(-90,90)", //faires tourner les emojis
        duration: 1 // la durer de l'animation
    })
    .to("slot div", {autoAlpha: 0, duration: 0.3}, //autoAlpha ( opaciter et visibiliter en meme temps)
                                 // duration c'est la durer de combien de temps reste les emojis a l'ecran (cest en seconde)
    "-=0.2")
    .add(()=>{
        slot.innerHTML = "";   //c'est pour supprimer tous l'html c'est qui fait que les emojis disparaissent aussi 
    });
}

//pour que sa envoie true si c'est animer et fulse si c'est non animer 
//isTweening = en cours d'animation
function isTweening(){
    return gsap.isTweening('.slot div');
}
