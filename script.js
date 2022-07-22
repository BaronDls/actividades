window.onload = inicio;
let reyes = ['atanagildo','ataulfo','ervigio','leogivildo','recesvinto','sisebuto','teodorico']
let camisetas = ['camisetaNegra.png','camisetaBlanca.png']
let camisetaActual = 0;
let reyActual = Math.floor(Math.random()*reyes.length)
let font = 2
function inicio() {
    document.querySelector('.camiseta').insertAdjacentHTML('beforeend',`<img id="dibujo" src='img/${camisetas[camisetaActual]}'>`);
    reyActualizado()
    document.querySelector('#dibujo').onclick = cambiarCamiseta;
    document.querySelector('.imagen').innerHTML= `<img id="rey" src=img/rey_${reyes[reyActual]}.png>`;
    document.querySelector('#rey').onclick = cambiarRey;
}

function reyActualizado(){
    document.querySelector('.texto').innerHTML='I ❤️'+reyes[reyActual].substring(0,1).toUpperCase()+reyes[reyActual].substring(1).toLowerCase()
}
function cambiarCamiseta() {
    colores=["white","black"]
    camisetaActual==0?camisetaActual=1:camisetaActual=0
    document.querySelector('#dibujo').src=`img/${camisetas[camisetaActual]}`
    document.querySelector('.texto').style.color=colores[camisetaActual]
}

function cambiarRey(){
    reyActual++
    reyActual>=7?reyActual=0:reyActual
    document.querySelector('#rey').src= `img/rey_${reyes[reyActual]}.png`;
    reyActualizado()
}

document.querySelector('.texto').addEventListener('keydown',(e)=>{
    console.log(e)
    if(e.key=='+'){
        font++
        e.preventDefault()
        document.querySelector('.texto').style.fontSize=font+'em'
    }
    if(e.key=='-'){
        font--
        e.preventDefault()
        document.querySelector('.texto').style.fontSize=font+'em'
    }
})