class PhotoElement{
    constructor(name, description, photoPath){
        this.name = name
        this.description = description
        this.photoPath = photoPath
    }
}









const mainMenu = document.getElementById("menu")

// app variable it contains the elements of the actual book app
const application = document.getElementById("app")
const helpWindow = document.getElementById("helpWindow")
helpWindow.remove()
application.remove() // we remove it first to add it when the menu is exited

let currentPic = -1
let isInApp = false
let isInContextMenu = false

function showHelp(){
    isInContextMenu = true
    application.appendChild(helpWindow)
    helpWindow.style.opacity = "1"
}
function hideHelp(){
    isInContextMenu = false
    helpWindow.style.opacity = "0"
    setTimeout(function(){
        helpWindow.remove()
    }, 1000)
}

/*
// slide logic
let mouseX = 0
window.onmousedown = e => {
    mouseX = e.x
}

window.onmouseup = e => {
    if(isInApp && !isInContextMenu){
        if(mouseX < e.x){
            changePic(-1)
        }else{
            changePic(1)
        }
    }
}*/


// arrows logic
document.addEventListener("keydown", function(e){
    if(e.code == "ArrowLeft"){
        changePic(-1)
    }
    if(e.code == "ArrowRight"){
        changePic(1)
    }
})




//#region the place where we write and store each picture

let p1 = new PhotoElement("La préparation à la journée d'intégration", "C'est le début de la journée d'intégration pour la terminale A, c'est aussi le début du challenge inter-classe auquel ils se préparent aux CDI.", "classe2.jpg")
let p2 = new PhotoElement("Les pancartes", "Quoi de mieux pour soutenir les compétiteurs de la classe qu'en brandissant des pancartes aux couleurs de celle-ci !", "pancartes.jpg")
let p3 = new PhotoElement("Termin-A-Thor", "Le nom de la classe et son slogan, les fruits de l'imagination débordante des terminales A !", "tableau.jpg")
let p4 = new PhotoElement("Les initiales de la classe", "Lors de la préparation, les élèves de la terminale A fabriquèrent les initiales de celle-ci pour les arborer fièrement lors des épreuves.", "carton.jpg")
let p5 = new PhotoElement("La classe se coordonne", "Les délégués introduient à la classe la performance qu'ils devront réaliser devant le jury", "tableau_loin.jpg")
let p6 = new PhotoElement("Soutenez le projet de classe !", '"Le projet qui tient à coeur aux élèves de la terminale A "Vos stylos usagés peuvent encore écrire une belle histoire"', "noah.jpeg")
let p7 = new PhotoElement("La course à oeuf", "Les élèves au loin attendent le signal de départ pour le début de la course à oeuf !", "course_oeuf.jpg")
let p8 = new PhotoElement("La course les yeux bandés", "Mariam tentent tant bien que mal de guider Noah jusqu'à la ligne d'arrivée mais il a les yeux bandés !", "course_aveugle.jpg")
let p9 = new PhotoElement("Les TA en salle poly", "Les terminales A rentrent en salle polyvalente pour passer leurs épreuves !", "poly.jpg")
let p10 = new PhotoElement("Le hula hoop", "Erwan s'apprête à engager son adversaire dans un duel de hula hoop !", "cerceau.jpg")
let p11 = new PhotoElement("Casse-tête", "Antoine tente de résoudre le casse-tête qui lui est donné, mais le temps est limité !", "puzzle.jpg")
let p12 = new PhotoElement("Twister", "De la souplesse et un mental solide...", "twister.jpg")
let p13 = new  PhotoElement("Tir à la corde", "La force et la détermination des TA leur permirent de remporter l'épreuve du tir à la corde.", "corde.jpg")

/* let p1 = new PhotoElement("La préparation à la journée d'intégration", "C'est le début de la journée d'intégration pour la terminale A, c'est aussi le début du challenge inter-classe auquel ils se préparent aux CDI.", "./resources/images/classe2.jpg")
let p2 = new PhotoElement("Les pancartes", "Quoi de mieux pour soutenir les compétiteurs de la classe qu'en brandissant des pancartes aux couleurs de celle-ci !", "./resources/images/pancartes.jpg")
let p3 = new PhotoElement("Termin-A-Thor", "Le nom de la classe et son slogan, les fruits de l'imagination débordante des terminales A !", "/resources/images/tableau.jpg")
let p4 = new PhotoElement("Les initiales de la classe", "Lors de la préparation, les élèves de la terminale A fabriquèrent les initiales de celle-ci pour les arborer fièrement lors des épreuves.", "/resources/images/carton.jpg")
let p5 = new PhotoElement("La classe se coordonne", "Les délégués introduient à la classe la performance qu'ils devront réaliser devant le jury", "/resources/images/tableau_loin.jpg")
let p6 = new PhotoElement("Soutenez le projet de classe !", '"Le projet qui tient à coeur aux élèves de la terminale A "Vos stylos usagés peuvent encore écrire une belle histoire"', "/resources/images/noah.jpeg")
let p7 = new PhotoElement("La course à oeuf", "Les élèves au loin attendent le signal de départ pour le début de la course à oeuf !", "/resources/images/course_oeuf.jpg")
let p8 = new PhotoElement("La course les yeux bandés", "Mariam tentent tant bien que mal de guider Noah jusqu'à la ligne d'arrivée mais il a les yeux bandés !", "/resources/images/course_aveugle.jpg")
let p9 = new PhotoElement("Les TA en salle poly", "Les terminales A rentrent en salle polyvalente pour passer leurs épreuves !", "/resources/images/poly.jpg")
let p10 = new PhotoElement("Le hula hoop", "Erwan s'apprête à engager son adversaire dans un duel de hula hoop !", "/resources/images/cerceau.jpg")
let p11 = new PhotoElement("Casse-tête", "Antoine tente de résoudre le casse-tête qui lui est donné, mais le temps est limité !", "/resources/images/puzzle.jpg")
let p12 = new PhotoElement("Twister", "De la souplesse et un mental solide...", "/resources/images/twister.jpg")
let p13 = new  PhotoElement("Tir à la corde", "La force et la détermination des TA leur permirent de remporter l'épreuve du tir à la corde.", "/resources/images/corde.jpg")
*/
let elements = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13]


//#endregion

// launches the app
function go(){
    mainMenu.style.opacity = "0"
    setTimeout(function(){
        mainMenu.remove()
        document.body.style.backgroundColor = "#2b2b2b"
        document.body.style.overflow = "scroll"

        document.body.appendChild(application) // adding the app again

        changePic(1)
        isInApp = true
    }, 1000)
}

function changePic(value){
    
    
    currentPic += value

    if(currentPic > elements.length - 1){
        currentPic = 0
    }
    if(currentPic < 0){
        currentPic = elements.length - 1
    }

    displayPicture()
    // let imageContainer = document.getElementById("imageContainer")



    // imageContainer.className = ""
}

function loadImage(){
    console.log("loading")
    let imageContainer = document.getElementById("imageContainer")
    imageContainer.className = "fading"
}

// get the components of a picture and update them
function displayPicture(){
    let imageContainer = document.getElementById("imageContainer")
    let titleContent = document.getElementById("titleContent")
    let descriptionContent = document.getElementById("descriptionContent")


    // imageContainer.src = `${elements[currentPic].photoPath}`
    let path = `${elements[currentPic].photoPath}`

    let pics = document.getElementsByClassName("imageContainer")
    for(i = 0; i < pics.length; i++){
        let srcSplit = pics[i].src.split("/")
        let imageName = srcSplit[srcSplit.length - 1]
        if(imageName != path){
            pics[i].style.display = "none"
        }else{
            pics[i].style.display = "block"
            pics[i].src = pics[i].src
            
        }
    }

    titleContent.innerHTML = elements[currentPic].name
    descriptionContent.innerHTML = elements[currentPic].description
}

function sizeUp(){
    let imageContainer = document.getElementById("imageContainer")
    window.open(imageContainer.src)
}


























