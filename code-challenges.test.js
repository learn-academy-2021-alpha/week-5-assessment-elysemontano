// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variable provided.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

describe("When 'codedMssg' is called", () =>{
  it("returns message that converts a to 4, e to 3, i to 1 and o to 0", () => {
    expect(codedMssg(secretCodeWord1)).toEqual("l4ck4d41s1c4l")
    expect(codedMssg(secretCodeWord2)).toEqual("g0bbl3dyg00k")
  })
})

// b) Create the function that makes the test pass.
// Create a function  that takes a string as an arguement
//use replace method on string for each letter that needs to change to number.  first value in .replace is the letter to be changed with /[]/g as a global modifier (so it does not change only the first value)

const codedMssg = (string) => {
  return string.replace(/['a']/g,'4').replace(/['e']/g,'3').replace(/['i']/g, '1').replace(/['o']/g, '0');
}
console.log(codedMssg(secretCodeWord1));
console.log(codedMssg(secretCodeWord2));

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

describe("when 'findLetterA' is called", () => {
  it("returns only strings containing the letter 'A'", () => {
    expect(findLetterA(arrayOfWords)).toEqual(["Apple", "Banana", "Peach"])
  })
})

// b) Create the function that makes the test pass.
//create a function that takes an array as an arguement
//use .filter to search the array using .includes to see if strings contain "a"

const findLetterA = (arr) => {
  return arr.filter(value => {
    return value.toLowerCase().includes("a")
  })
}
console.log(findLetterA(arrayOfWords));

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("when 'fullHouse' is called",() => {
  it("returns with a boolean statement if the Tanner family (array) has one pair and three of a kind", () => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})

// b) Create the function that makes the test pass.
//create a function that takes an array as an arguement
//use for loop to compare values in array
// if array includes (i === i +1) *3 && (i === i+1)* 2
//

// const fullHouse = (tanners) => {
//   let checkNums = tanners.every( e => {
//     if((e === (e + 1) * 3) && (e === (e + 1) * 2)){
//       return true
//     }else{
//       return false
//     }
//   }return checkNums
// }

//create a function that takes an array as an arguement
//use map to iterate over array with vaule and index accessable
//if statement that has [i] = 3 && [i] = 2 return true / else return false

//filter to store 3 same values
//filter to store 2 same values
//these will be the count
//find 2 unique characters and count the instances of unique characters
//check for three of one and two of other

//keep track of characters and count them -- store as variable or object
//isolate one character and check for other instances.

// const fullHouse = (tanners) => {
//   let dupCount = []
//   let dupValues = tanners.filter((value,i) => tanners[i] = (tanners[i + 1]))
//     if((dupValues[0] === 2 && dupValues[1] === 3) || (dupValues[1] === 2 && dupValues[0] === 3)){
//       return true
//     }else {
//       return false
//     }
//   }

//^nope..... now to try to push into arrays.....

const fullHouse = (tanners) => {
let twoInHand = []
let threeInHand = []
  tanners.filter((v, i) => {
  if((v[i] === v[i + 1]) === 2){
    twoInHand.push(v)
  }if((v[i] === v[i + 1]) === 3){
    threeInHand.push(v)
  }
})
    if(twoInHand.length === 2 && threeInHand.length === 3){
      return true
    }else{
      return false
    }
}

//now for trying newSet method....

// const fullHouse = (tanners) => {
//   let dupCount = new Set(tanners)
//   let dupValues = tanners.filter(value => {
//   if((dupCount[0] === 2 && dupCount[1] === 3) || (dupCount[1] === 2 && dupCount[0] === 3)){
//     return true
//   }else{
//     return false
//   }})
// }


console.log(fullHouse(hand1));
console.log(fullHouse(hand2));
console.log(fullHouse(hand3));
