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
}



//#region the place where we write and store each picture
let p1 = new PhotoElement("La classe", " Lorem ipsum dolor sit amet, Louis boulot, consectetur adipiscing elit. Sed vehicula arcu lectus, ut sagittis enim rutrum a. Fusce cursus lorem sed nunc blandit fermentum. Cras convallis ipsum in quam dictum, et laoreet magna iaculis. Donec placerat efficitur enim, nec vehicula libero ornare eu. Phasellus tristique", "./resources/images/classe.jpg")
let p2 = new PhotoElement("Le tire à la corde", " Nulla facilisi. Vivamus quis ligula id diam posuere porttitor et in nibh. Morbi venenatis semper odio, at commodo enim pulvinar posuere. Phasellus quis ex at nunc pharetra pulvinar congue vitae purus. Vestibulum massa tellus, imperdiet id augue vel, ultrices tincidunt est. ", "./resources/images/corde.jpg")
let p3 = new PhotoElement("La classe encore", "Quisque vulputate velit et laoreet luctus. Curabitur eget egestas dui, in gravida enim. Praesent placerat turpis ac nibh interdum congue. Nunc efficitur in quam vel consectetur. Vivamus aliquam augue et ligula ornare tincidunt a eget augue. ", "./resources/images/classe2.jpg")
let elements = [p1, p2, p3]
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
}

// get the components of a picture and update them
function displayPicture(){
    let imageContainer = document.getElementById("imageContainer")
    let titleContent = document.getElementById("titleContent")
    let descriptionContent = document.getElementById("descriptionContent")

    imageContainer.src = `${elements[currentPic].photoPath}`
    titleContent.innerHTML = elements[currentPic].name
    descriptionContent.innerHTML = elements[currentPic].description
}

function sizeUp(){
    let imageContainer = document.getElementById("imageContainer")
    window.open(imageContainer.src)
}


























