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
        
        
        
       
        /*
        26) Create an array with 100 random numbers in it
        27) Write a function to get the maximum and minimum values from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays as parameters and returns the longest one
        30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values */