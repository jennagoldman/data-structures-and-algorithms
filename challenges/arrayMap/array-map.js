// Write a function called map which takes an array and a function as arguments.
// Without utilizing any of the built-in methods available to your language, return an array with the function applied to each element.

// Write a function called map that takes a function and an array
// Initialize the result array
// Loop through each element in the array
// Run the function on each element and push the result into the results array
// Return the results array
function map(someFunction, array) {
    let resultArray = [];
    for(let i = 0; i < array.length; i++) {
        const item = array[i];
        resultArray.push(someFunction(item));
    }
    return resultArray;
};

// Example 1: Should add 1 to each number in the array and return [2, 3, 4]
const numbers = [1, 2, 3];
const addOne = (argument) => argument + 1;
console.log(map(addOne, numbers));

// Example 2: Should say hi to each name in the array and return ['Hi, Tommy!', 'Hi, Maxwell!, 'Hi, Sara!']
const names = ['Tommy', 'Maxwell', 'Sara'];
const sayHello = (argument) => `Hi, ${argument}!`;
console.log(map(sayHello, names));

// Example 3: Should return an array of just the cat owners' cats' names (['Loki', 'Bagheera', 'Hobbes', 'Charlotte'])
const catOwners = [
    {
      name: 'Jenna',
      cat: 'Loki'
    },
    {
      name: 'Michael',
      cat: 'Bagheera'
    },
    {
      name: 'Julie',
      cat: 'Hobbes'
    },
    {
      name: 'Dannie',
      cat: 'Charlotte'
    }
  ];
const getCats = (object) => object.cat;
console.log(map(getCats, catOwners));
