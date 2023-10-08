class PhotoElement{
    constructor(name, description, photoPath){
        this.name = name
        this.description = description
        this.photoPath = photoPath
    }

    // USELESS ??
    /*add() {
        const title = document.createElement("h2")    
        title.innerHTML = this.name

        const description = document.createElement("p")
        description.innerHTML = this.description

        const photo = document.createElement("img")
        photo.src = this.photoPath


        document.body.appendChild(title)
        document.body.appendChild(description)
        document.body.appendChild(photo)
    }*/
}









const mainMenu = document.getElementById("menu")
const background = document.getElementById("background")

// app variable it contains the elements of the actual book app
const application = document.getElementById("app")
application.remove() // we remove it first to add it when the menu is exited

let currentPic = -1

//#region the place where we write and store each picture
let p1 = new PhotoElement("La classe", " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula arcu lectus, ut sagittis enim rutrum a. Fusce cursus lorem sed nunc blandit fermentum. Cras convallis ipsum in quam dictum, et laoreet magna iaculis. Donec placerat efficitur enim, nec vehicula libero ornare eu. Phasellus tristique", "./resources/images/classe.jpg")
let p2 = new PhotoElement("Le tire à la corde", " Nulla facilisi. Vivamus quis ligula id diam posuere porttitor et in nibh. Morbi venenatis semper odio, at commodo enim pulvinar posuere. Phasellus quis ex at nunc pharetra pulvinar congue vitae purus. Vestibulum massa tellus, imperdiet id augue vel, ultrices tincidunt est. ", "./resources/images/corde.jpg")
let p3 = new PhotoElement("La classe encore", "Quisque vulputate velit et laoreet luctus. Curabitur eget egestas dui, in gravida enim. Praesent placerat turpis ac nibh interdum congue. Nunc efficitur in quam vel consectetur. Vivamus aliquam augue et ligula ornare tincidunt a eget augue. ", "./resources/images/classe2.jpg")
let elements = [p1, p2, p3]
//#endregion

// launches the app
function go(){
    mainMenu.style.opacity = "0"
    background.style.opacity = "0"
    setTimeout(function(){
        mainMenu.remove()
        background.remove()
        document.body.style.backgroundColor = "#eee"
        document.body.style.overflow = "scroll"

        document.body.appendChild(application) // adding the app again
        nextPic()
    }, 1000)
}

function nextPic(){
    
    let imageContainer = document.getElementById("imageContainer")
    let titleContent = document.getElementById("titleContent")
    let descriptionContent = document.getElementById("descriptionContent")
    
    currentPic++

    if(currentPic > elements.length - 1){
        currentPic = 0
    }

    imageContainer.src = `${elements[currentPic].photoPath}`
    titleContent.innerHTML = elements[currentPic].name
    descriptionContent.innerHTML = elements[currentPic].description
}

function sizeUp(){
    let imageContainer = document.getElementById("imageContainer")
    window.open(imageContainer.src)
}




























