/* Javascript Dom New Element */

// createElement
// textContent
// appendChild

// let element = document.createElement("marquee")
// element.setAttribute("bgcolor" , "green")
// element.setAttribute("direction" , "down")
// element.textContent = "hello , javascript!"
// document.body.appendChild(element)

// let image = document.createElement('img')

// image.setAttribute('src' , "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg")

// image.setAttribute("alt" , "imgeOfAnimal")
// image.setAttribute('width' , "300")
// image.setAttribute('height' , "300")

// document.body.appendChild(image)
// console.log(image);

// addEventListener
// attributes
// appendChild
// blur()
// focus()
// childElementCount
// childNodes
// classList
// className
// click()
// firstChuld
// hasAttribute
// hasAttributes
// removeChild


// document.getElementById('clicks').addEventListener
// ("mouseover" , size)

// function size() {
//     document.getElementById('demobox').style.height = " 200px "
//     document.getElementById('demobox').style.width = " 200px "
//     document.getElementById('demobox').style.backgroundColor = "lightblue"
// }

// document.getElementById('headtext').addEventListener
// ("click" , size)

// function size(){
//     document.getElementById('headtext').style.display = "none"
// }

// let image = document.getElementById('img').attributes
// let image1 = document.getElementById('img').attributes.length

// console.log(image);
// console.log(image1);


/* me */
// let inputs = document.getElementById('text').focus()

// function blur(){
//     document.getElementById('text').blur()
// }

// document.getElementById("focuss").addEventListener("click" , function(){
//     document.getElementById('text').focus()
// })

// document.getElementById("focuss").addEventListener("click" , function(){
//     document.getElementById("text").focus()
// })

// document.getElementById("blurr").addEventListener("click" , function(){
//     document.getElementById('text').blur()
// })


/* dg */

// let input = document.getElementById("text").focus();

// function blur() {
//     document.getElementById('text').blur()
// }

document.getElementById("focuss").addEventListener("click" , function(){
    document.getElementById('text').focus()
})

document.getElementById("blurr").addEventListener("click" , function(){
    document.getElementById('text').blur()
})

// let element = document.getElementById("deom").childElementCount

// console.log(element);

// let element = document.getElementById("demo").childNodes

// console.log(element);

// let data = document.getElementById("demo").classList
// data.add('heading')