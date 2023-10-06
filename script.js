const mainMenu = document.getElementById("menu")
const background = document.getElementById("background")

// lauches the app
function go(){
    mainMenu.style.opacity = "0"
    background.style.opacity = "0"
    setTimeout(function(){
        mainMenu.remove()
    }, 1000)
}

// let p1 = new PhotoElement("test", "this test is a test", "./resources/images/corde.jpg")
// p1.add()
