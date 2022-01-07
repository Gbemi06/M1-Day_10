//21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
let x = 'John'
let y = 'Doe'

console.log(x + " <> " + y)

// 22) Create an object with properties such name, surname, email
let myDetails = {
    name: "Paul",
    surname: "Gill",
    email: "paul.gill@gmail.com"

}

console.log(myDetails)

// 23) Delete the email property from the previously created object
delete myDetails.email

console.log(myDetails)

// 24) Create an array with 10 strings in it
let createArray = []

for (let i = 0; i < 10; i++) {
    createArray.push('string-' + (i +1))
}

console.log(createArray)

// 25) Print in the console every string from the previous array


for (let i = 0; i < createArray.length; i++) {
    console.log(createArray[i])
}

//26) Create an array with 100 random numbers in it
let randomNumber = []
for (let i = 0; i < 100; i++) {
    randomNumber.push(Math.floor(Math.random() * 100))
}
console.log(randomNumber)

//27) Write a function to get the maximum and minimum values from the previously created array
let minAndMax = function() {
    let min = randomNumber[0]
    let max = randomNumber[0]
    for (let i=0; i < randomNumber.length; i++){
        let currentNumber = randomNumber[i]
        if (currentNumber < min){
            min = currentNumber
        }
        if (currentNumber > max){
            max = currentNumber
        }
    }
    console.log(max)
    console.log(min)
}

minAndMax()

// 28) Create an array of arrays, in which every array has 10 random numbers

let createArraysOfArray = function(){
    let outerArray = []
    for (let i = 0; i < 10; i++){
        innerArray = []
        for (let j = 0; j < 10; j++) {
            innerArray.push(Math.floor(Math.random() * 10))
        }
        outerArray.push(innerArray)
    }
    console.log(outerArray)
}

createArraysOfArray()


// 31) Get the element with an id of "container" from the page

//const list = document.querySelectorAll("#container")
//console.log(list)

const led = document.querySelectorAll("h1")[0]
console.log(led)


        /*
        
        29) Create a function that gets 2 arrays as parameters and returns the longest one
        30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values 
        
         DOM EXERCISES

    
        32) Get every <td> element from the page
        33) Use a loop for printing the text inside of every <td> element in the page
        34) Write a function to change the heading of the page
        35) Write a function to add an extra row to the table
        36) Write a function to add a class of "test" to each row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a unordered list
        40) Write a function to empty a list
        */