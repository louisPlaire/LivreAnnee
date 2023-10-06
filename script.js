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

let imageContainer = document.getElementById("imageContainer")

let currentPic = -1

//#region the place where we write and store each picture
let p1 = new PhotoElement("test", " ", "./resources/images/classe.jpg")
let p2 = new PhotoElement("test", " ", "./resources/images/corde.jpg")
let p3 = new PhotoElement("test", " ", "./resources/images/classe2.jpg")
let elements = [p1, p2, p3]
//#endregion

// launches the app
function go(){
    mainMenu.style.opacity = "0"
    background.style.opacity = "0"
    setTimeout(function(){
        mainMenu.remove()
        background.remove()
        document.body.style.backgroundColor = "#fff"

        document.body.appendChild(application) // adding the app again
    }, 1000)
}

function nextPic(){
    
    imageContainer = document.getElementById("imageContainer")
    
    currentPic++

    if(currentPic > elements.length){
        currentPic = 0
    }

    imageContainer.src = `${elements[currentPic].photoPath}`
}




























