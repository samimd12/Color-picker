// const getColor = ()=>{
//     // Hex code
//     const randomNumber =Math.floor(Math.random() * 16777215)
//     const randomCode = "#" + randomNumber.toString(16)
//     document.body.style.backgroundColor = randomCode
//     document.getElementById("color-code").innerText = randomCode

//     // This will help to save the colorcode in the clipboard and we can paste easily
//     // navigator.clipboard.writeText(randomCode)
// }

// // Event call is when we click it will start 
// document.getElementById("btn").addEventListener(
//     "click",getColor
// )
// // Initial call when we load the page this will should call
// getColor()


// // Get image object
// var img = new Image()
// img.crossOrigin = 'anonymous'

// // Get random Image
// img.src ="https://source.unsplash.com/random/500x500"

// //Get id of Canvas
// var canvas = document.getElementById('canvas')

// // Content of canvas in 2d format
// var ctx = canvas.getContext('2d')

// //onload Image
// img.onload = function(){
//     ctx.drawImage(img,0,0)
//     img.style.display = 'none'
// }

// // Get ALL IDs
// var hoveredColor = document.getElementById('hovered-color')
// var selectedColor = document.getElementById('selected-color')

// // Now pic of colors
// function pick(e,destination){
//     var x = e.layerX
//     var y = e.layerY
//     var pixel = ctx.getImageData(x,y,1,1)
//     var data = pixel.data

//     //RGBA Color Format
//     const rgba = `rgba(${data[0]},${data[1]},${data[2]},${data[3] / 255})`

//     //Now Set Destination
//     destination.style.background = rgba
//     destination.textContent = rgba

//     return rgba
// }



const imageInput = document.querySelector("#image-select")
const imagePreview = document.querySelector(".preview")

if(!window.EyeDropper){
    alert("Your browser does not support this feature")
}

const eyedropper = new EyeDropper()

const pickerBtn = document.querySelector(".open-picker")
const result = document.querySelector(".res")

imageInput.addEventListener("change",function(){
    imagePreview.classList.add("active")
    const file = this.files[0]
    if(!file) return
    const reader = new FileReader()
    reader.addEventListener("load",function(){
        imagePreview.src = this.result
    })
    reader.readAsDataURL(file)
})

pickerBtn.addEventListener("click",function(){
    result.classList.add("show")
    eyedropper.open()
    .then(res =>{
        const pickedColor = res.sRGBHex;
                result.innerHTML = `Picked Color : <b> ${pickedColor}</b>`

        document.body.style.backgroundColor =   pickedColor;
    
    })
    .catch(err =>{
        console.log("User canceled the Selection")
    })
})
