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

// 29) Create a function that gets 2 arrays as parameters and returns the longest one

const diffOfArray = function(Array1, Array2) {
    // return Array1.length > Array2.length ? Array1 : Array2

    if (Array1.length > Array2.length){
        return Array1
    }
    if (Array1.length < Array2.length) {
        return Array2
    }
    else {
        return "The two Arrays are of the same length"
    }
}
let diff = diffOfArray([1,2,3,4], [1,2,3,4])
console.log(diff)


// 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values 

const sumOfArrays = function(Array1, Array2) {
    let sum1 = 0
    for (numbers of Array1){
        sum1 += numbers
    }
    let sum2 = 0
    for (numbers of Array2){
        sum2 += numbers
    }
    return sum1 > sum2 ? sum1 : sum2
}

let sum = sumOfArrays([2,4,6], [45,2])
console.log(sum)

// 31) Get the element with an id of "container" from the page

const list = document.getElementById("container")

// 32) Get every <td> element from the page
let tableData = document.querySelectorAll("td")

// 33) Use a loop for printing the text inside of every <td> element in the page
/*for (i = 0; i < tableData.length; i++) {
    tableData[i].innerText = "Text"
}*/

// 34) Write a function to change the heading of the page
let changeHeading = function() {
    let h1Heading = document.querySelector("h1")
    h1Heading.innerText = "Change Title Head"
}

changeHeading()

// 35) Write a function to add an extra row to the table
const createNewCell = function() {
    let newTable = document.querySelector("tbody")
    let tr = document.createElement("tr")
    for (i = 0; i < 5; i++) {
        let td = document.createElement("td")
        td.innerText = "cell " + (i+1)
        tr.appendChild(td)
    }
    newTable.appendChild(tr)
}
createNewCell()

// 36) Write a function to add a class of "test" to each row in the table

const addNewClass = function() {
    let trs = document.querySelectorAll("tr")
    for (i = 0; i < trs.length; i++) {
        trs[i].classList.add('test')
    }
    
}
addNewClass()

// 37) Write a function to add a red background to every link in the page

const addColor = function() {
    let aLinks = document.querySelectorAll("a")
    for (i = 0; i < aLinks.length; i++){
        aLinks[i].classList.add('aTag-color')
    }
}

addColor()

//38) Console log "Page loaded" when the page is correctly loaded

window.onload = function(){
    console.log('Page loaded')
}

// 39) Write a function to add new items to a unordered list
const addNewList = function(){
    li = document.querySelector()
}
        /*
        
        
        
         DOM EXERCISES

    
        
       
        
        
        
        
        
        
        40) Write a function to empty a list
        */