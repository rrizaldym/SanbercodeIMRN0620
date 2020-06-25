//soal no 1
console.log('No. 1')

let golden = goldenFunction => {
    console.log("this is golden!!")
}

golden()

console.log('')
//soal no 2
console.log('No. 2')

const newFunction = function literal(firstName, lastName){
    return {
      firstName,
      lastName,
      fullName: function(){
        console.log(`${firstName} ${lastName}`)        
      }
    }
}

//Driver Code 
newFunction("William", "Imoh").fullName()

console.log('')
//soal no 3
console.log('No. 3')

let newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject

// Driver code
console.log(firstName, lastName, destination, occupation)

console.log('')
//soal no 4
console.log('No. 4')

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]

//Driver Code
console.log(combined)

console.log('')
//soal no 5
console.log('No. 5')

const planet = "earth"
const view = "glass"
const before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
 
// Driver Code
console.log(before) 