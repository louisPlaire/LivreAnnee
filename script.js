const mainMenu = document.getElementById("menu")
const background = document.getElementById("background")

// launches the app
function go(){
    mainMenu.style.opacity = "0"
    background.style.opacity = "0"
    setTimeout(function(){
        mainMenu.remove()
    }, 1000)
}
