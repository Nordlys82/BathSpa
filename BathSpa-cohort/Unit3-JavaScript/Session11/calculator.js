/** get the constant variable to be added by it's element id*/
const adds = document.getElementById('add')
/**listen to the add click*/
adds.addEventListener('click',add)
/** get the constant variable that's to be subtracted by it's id*/
const subtracts = document.getElementById('subtract')
/**listen to the subtract click*/
subtracts.addEventListener('click',subtract)
/**get the constant variable to be multiplied by it's element id */
const multiplys = document.getElementById('multiply')
/**listen to the multiply click*/
multiplys.addEventListener('click',multiply)


let z


/** start of function by getting items (parameter e (e=event)) */
function add(e) {
/** don't refresh browser or do it's default thing */
    e.preventDefault()

    console.log('add')
/** let the first variable be labelled first number and equal the value of x */
    let numberOne = document.getElementById("x").value
/** let the second variable be labelled second number and equal the value of y */
let numberTwo = document.getElementById("y").value

let x=parseInt(numberOne)
let y=parseInt(numberTwo)
console.log(x, y)
    
     z=x+y
     console.log(`Answer is'${z}`)
     let output=document.getElementById('output')
    output.innerText=z
}

function subtract(e) {
    e.preventDefault()
    console.log('sub')

    let numberOne = document.getElementById("x").value
let numberTwo = document.getElementById("y").value

let x=parseInt(numberOne)
let y=parseInt(numberTwo)
console.log(x, y)

    z=x-y
    console.log(z)
    console.log(`Answer is'${z}`)
    let output=document.getElementById('output')
    output.innerText=z
}

function multiply(e) {
    e.preventDefault()
    console.log('mult')

    let numberOne = document.getElementById("x").value
let numberTwo = document.getElementById("y").value

let x=parseInt(numberOne)
let y=parseInt(numberTwo)
console.log(x, y)

    z=x*y
    console.log(`Answer is'${z}`)
    let output=document.getElementById('output')
    output.innerText=z
}


