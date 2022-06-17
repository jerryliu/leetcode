//1-Explain what a callback function is and provide a simple example
//A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed. 
function modifyArray(arr, callback) {
    // do something to arr here
    arr.push(100);
    // then execute the callback function that was passed
    callback();
  }
  
  var arr = [1, 2, 3, 4, 5];
  
  modifyArray(arr, function() {
    console.log("array has been modified", arr);
  });
//2-Given a string, reverse each word in the sentence
var string = "Welcome to this Javascript Guide!";
console.log( string.split('').reverse().join('') )
//Q3: How to check if an object is an array or not?
var arrayList = [1 , 2, 3];
console.log(Array.isArray(arrayList))

//Q4: How to empty an array in JavaScript?
arrayList = [];
arrayList.length = 0;
//Q5: How would you check if a number is an integer?
console.log(Number.isInteger(12.2))

// Q7: duplicate
function duplicate(arr){
    return arr.concat(arr);
}
console.log(duplicate([1, 2, 3, 4, 5]));// [1,2,3,4,5,1,2,3,4,5]

//Q10: FizzBuzz Challenge
//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
function FizzBuzz(){

    for(let i=1; i<=100; i++){
        
        let f=(i%3===0)?i:0
        let b=(i%5===0)?i:0
       console.log( f?(b?'FizzBuzz':'Fizz'):b ? 'Buzz':i) 
    }
}
// console.log(FizzBuzz());
