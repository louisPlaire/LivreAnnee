export { PhotoElement }

class PhotoElement{
    constructor(name, description, photoPath){
        this.name = name
        this.description = description
        this.photoPath = photoPath
    }

    add() {
        const title = document.createElement("h2")    
        title.innerHTML = this.name

        const description = document.createElement("p")
        description.innerHTML = this.description

        const photo = document.createElement("img")
        photo.src = this.photoPath


        document.body.appendChild(title)
        document.body.appendChild(description)
        document.body.appendChild(photo)
    }
}