const ham = document.querySelector('.ham');
const nav = document.querySelector('.headerLetters');
const toggle = document.querySelector('.toggle');
const equis = document.querySelector('.equis');
const main = document.querySelector('.main');
//-------------------------------------------------------------------------nav

const ancla1 = document.getElementById('ancla1')
const ancla2 = document.getElementById('ancla2')
const ancla3 = document.getElementById('ancla3')
const ancla4 = document.getElementById('ancla4')
const header = function headerFunction() {
        ham.addEventListener('click', prueba => {
            toggle.classList.toggle("inactivo")
            equis.classList.toggle("inactivo")
            equis.classList.remove("activo")
            const activo = toggle.classList.contains('inactivo')
            if (activo === true) {
                nav.classList.add("activo")
                main.classList.add("blur")

                ancla1.addEventListener('click', () =>{
                    nav.classList.remove("activo")
                    main.classList.remove("blur")
                    toggle.classList.remove("inactivo")
                    equis.classList.remove("activo")
                    equis.classList.add("inactivo")
                })

                ancla2.addEventListener('click', () =>{
                    nav.classList.remove("activo")
                    main.classList.remove("blur")
                    toggle.classList.remove("inactivo")
                    equis.classList.remove("activo")
                    equis.classList.add("inactivo")
                })

                ancla3.addEventListener('click', () =>{
                    nav.classList.remove("activo")
                    main.classList.remove("blur")
                    toggle.classList.remove("inactivo")
                    equis.classList.remove("activo")
                    equis.classList.add("inactivo")
                })

                ancla4.addEventListener('click', () =>{
                    nav.classList.remove("activo")
                    main.classList.remove("blur")
                    toggle.classList.remove("inactivo")
                    equis.classList.remove("activo")
                    equis.classList.add("inactivo")
                })
            } else {
                nav.classList.remove("activo")
                main.classList.remove("blur")
            }
        })
    }
    //-------------------------------------------------------------------- mediaq
const closeBlur = matchMedia('(max-width: 770px)');
const runner = mql => {
    if (mql.matches === true) {} else {
        main.classList.remove("blur")
        nav.classList.remove("activo")
        equis.classList.remove("activo")
        equis.classList.add("inactivo")
        toggle.classList.remove("inactivo")
    }
}

//------------------------------------------------------------------------------skills

//---------------botones
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")

//--------------------- Cajas usables
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')

// Logica para saber si tienen una clase 
const box1t = box1.classList.contains('inactivo')
const box2t = box1.classList.contains('inactivo')
const box3t = box1.classList.contains('inactivo')
const box4t = box1.classList.contains('inactivo')

btn1.addEventListener("click", () => {
    if (box1t === false) { 
        box1.classList.remove('inactivo')
        btn2.classList.remove('selected')
        btn3.classList.remove('selected')
        btn4.classList.remove('selected')
        btn1.classList.add('selected')
        box2.classList.add('inactivo')
        box3.classList.add('inactivo')
        box4.classList.add('inactivo')
    }
})
btn2.addEventListener("click", () => {
    if (box2t === false) {
        btn2.classList.add('selected')
        btn1.classList.remove('selected')
        btn3.classList.remove('selected')
        btn4.classList.remove('selected')
        box2.classList.remove('inactivo')
        box1.classList.add('inactivo')
        box3.classList.add('inactivo')
        box4.classList.add('inactivo')

    }
})

btn3.addEventListener("click", () => {
    if (box3t === false) {
        btn3.classList.add('selected')
        btn1.classList.remove('selected')
        btn2.classList.remove('selected')
        btn4.classList.remove('selected')
        box2.classList.remove('inactivo')
        box3.classList.remove('inactivo')
        box1.classList.add('inactivo')
        box2.classList.add('inactivo')
        box4.classList.add('inactivo')

    }
})
btn4.addEventListener("click", () => {
    if (box4t === false) {
        btn4.classList.add('selected')
        btn1.classList.remove('selected')
        btn3.classList.remove('selected')
        btn2.classList.remove('selected')
        box2.classList.remove('inactivo')
        box4.classList.remove('inactivo')
        box2.classList.add('inactivo')
        box3.classList.add('inactivo')
        box1.classList.add('inactivo')

    }
})

/* // Cards
/*  */
function tarjetas() {
    

    const card = document.querySelector(".card")
    const card2 = document.querySelector(".card2")
    const card3 = document.querySelector(".card3")
    const card4 = document.querySelector(".card4")
    const card5 = document.querySelector(".card5")
    const card6 = document.querySelector(".card6")
    
    const flip1 = card.classList.contains('flipper')
    const flip2 = card.classList.contains('flipper')
    const flip3 = card.classList.contains('flipper')
    const flip4 = card.classList.contains('flipper')
    const flip5 = card.classList.contains('flipper')
    const flip6 = card.classList.contains('flipper')

    const cardHeader = document.querySelector('.cardHeader')
    const cardMain = document.querySelector('.cardMain')

    const cardHeader2 = document.querySelector('.cardHeader2')
    const cardMain2 = document.querySelector('.cardMain2')

    const cardHeader3 = document.querySelector('.cardHeader3')
    const cardMain3 = document.querySelector('.cardMain3')

    const cardHeader4 = document.querySelector('.cardHeader4')
    const cardMain4 = document.querySelector('.cardMain4')

    const cardHeader5 = document.querySelector('.cardHeader5')
    const cardMain5 = document.querySelector('.cardMain5')

    const cardHeader6 = document.querySelector('.cardHeader6')
    const cardMain6 = document.querySelector('.cardMain6')

    const oculto = document.querySelector('.oculto')
    const oculto2 = document.querySelector('.oculto2')
    const oculto3 = document.querySelector('.oculto3')
    const oculto4 = document.querySelector('.oculto4')
    const oculto5 = document.querySelector('.oculto5')
    const oculto6 = document.querySelector('.oculto6')

    card.addEventListener("click",()=>{
        if (flip1 === false) {
            card.classList.toggle('flipper')
            cardHeader.classList.toggle('cardHeaderDefault')
            cardMain.classList.toggle('inactivo')
            oculto.classList.toggle('hidden')

        }
    })
     card2.addEventListener("click",()=>{
        if (flip2 === false) {
            card2.classList.toggle('flipper')
            cardHeader2.classList.toggle('cardHeaderDefault')
            cardMain2.classList.toggle('inactivo')
            oculto2.classList.toggle('hidden')
        }
    })
  card3.addEventListener("click",()=>{
        if (flip3 === false) {
            card3.classList.toggle('flipper')
            cardHeader3.classList.toggle('cardHeaderDefault')
            cardMain3.classList.toggle('inactivo')
            oculto3.classList.toggle('hidden')
        }
    })  
    
    card4.addEventListener("click",()=>{
        if (flip4 === false) {
            card4.classList.toggle('flipper')
            cardHeader4.classList.toggle('cardHeaderDefault')
            cardMain4.classList.toggle('inactivo')
            oculto4.classList.toggle('hidden')
        }
    })
    
    card5.addEventListener("click",()=>{
        if (flip5 === false) {
            card5.classList.toggle('flipper')
            cardHeader5.classList.toggle('cardHeaderDefault')
            cardMain5.classList.toggle('inactivo')
            oculto5.classList.toggle('hidden')
        }
    })
    card6.addEventListener("click",()=>{
        if (flip6 === false) {
            card6.classList.toggle('flipper')
            cardHeader6.classList.toggle('cardHeaderDefault')
            cardMain6.classList.toggle('inactivo')
            oculto6.classList.toggle('hidden')
        }
    })

}
tarjetas() 
//------------------------------------------------------------------------LLamados
header()
closeBlur.addListener(runner);
runner(closeBlur);