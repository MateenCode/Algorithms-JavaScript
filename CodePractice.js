// 1) Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).
    // If the value is a multiple of 3: use the value 'Fizz' instead
    // If the value is a multiple of 5: use the value 'Buzz' instead
    // If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead


// Return an array
function fizzbuzz(n) {
  result = [];
  for (i = 1; i <= n; i++) {
    // if the number is divisible by 3, write "Fizz"
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz")
    }
    // if the number is divisible by 5, write "Buzz"
    else if (i % 3 === 0) {
        result.push("Fizz")
    }
    // otherwise, write just the number
    else if (i % 5 === 0) {
      result.push("Buzz")
    }
    else{ result.push(i) }
}
    return  result
}




// 2) What is the value of foo?
var foo = 10 + '20';

// Answer: 1020




// 3) How would you make this work?
add(2, 5); // 7
add(2)(5); // 7

// Answer :

function add(a, b){
  return a+b
}
console.log(add(2, 5))



// 4) What value is returned from the following statement?
// "i'm a lasagna hog".split("").reverse().join("");


// 5) What is the outcome of the two alerts below?

var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);


// 6) What is the value of foo.length?

var foo = [];
foo.push(1);
foo.push(2);



// 7) What is the value of foo.x?

var foo = {
  n: 1
};
var bar = foo;
foo.x = foo = {
  n: 2
};


// 8) What does the following code print?

console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');


// 9) Create a bubble sort function

let numbers = [4, 5, 1, 8, 9, 2];

function bubbleSort(list) {


  return;
}
bubbleSort(numbers); // ==> [1, 2, 4, 5, 8, 9]
