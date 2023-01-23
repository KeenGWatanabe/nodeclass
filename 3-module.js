// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const person1 = 'rger' 
const person2 = 'peter'

const sayHi = (name) =>{
    console.log(`Hello there ${name}`)
}

sayHi('susan')
sayHi(person1)
sayHi(person2)