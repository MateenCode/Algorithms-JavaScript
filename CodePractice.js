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
    } else {
      result.push(i)
    }
  }
  return result
}




// 2) What is the value of foo?
var foo = 10 + '20';

// Answer: 1020




// 3) How would you make this work?
add(2, 5); // 7
add(2)(5); // 7

// Answer :

function add(a, b) {
  return a + b
}
console.log(add(2, 5))



// 4) What value is returned from the following statement?
"i'm a lasagna hog".split("").reverse().join("");

// Answer: split up the strings reverse the order then rejoined
// the answer is the same statement backwords goh angasal a m'i




// 5) What is the outcome of the two alerts below?

var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);

// First Alert: hello world
// Second Alert: bar is undefined because bar is local variable that only exist inside of function




// 6) What is the value of foo.length?

var foo = [];
foo.push(1);
foo.push(2);



// Answer: the length is 2 length defined the how many objects inside of the array but index starts from zero which doesnt apply in this situation


// 7) What is the value of foo.x?

var foo = {
  n: 1
};
var bar = foo;
foo.x = foo = {
  n: 2
};


// Answer: 2 even though bar is set foo the origin value of foo hasnt changed


// 8) What does the following code print?

console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');


// Answer: setTimeout wait for all console to apply then runs the function;  One, Three, Two


// 9) Create a bubble sort function

let numbers = [4, 5, 1, 8, 9, 2];

function bubbleSort(items) {

  var length = items.length;
  for (var i = (length - 1); i >= 0; i--) {
    //Number of passes
    for (var j = (length - i); j > 0; j--) {
      //Compare the adjacent positions
      if (items[j] < items[j - 1]) {
        //Swap the numbers
        var tmp = items[j];
        items[j] = items[j - 1];
        items[j - 1] = tmp;
      }
    }
  }
}


bubbleSort(numbers); // ==> [1, 2, 4, 5, 8, 9]
console.log(numbers)



// 9) Sort the employee by age


var persons = [{
    "name": "john",
    "age": "23"
  },
  {
    "name": "harry",
    "age": "21"
  },
  {
    "name": "jack",
    "age": "25"
  }
];





function employeeSort(employee) {


  var length = employee.length;

  // i is set to lengh of the array if index is greater or equel to 0 then reverse loop through the employee
  for(var i = (length-1); i >= 0; i--){
  // Another loop for comparesion of initial loop
  //j is to to length of origin minus the index, if j is greater then 0 then loop in reverse
    for(var j = (length - i); j > 0; j--){
      //Compare the adjacent positions
      if (employee[j] < employee[j - 1]) {
        //Swap the numbers
        var tmp = employee[j];
        employee[j] = employee[j - 1];
        employee[j - 1] = tmp;
      }
    }
  }
}

employeeSort(persons)

console.log(persons)
