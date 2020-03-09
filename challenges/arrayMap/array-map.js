// Write a function called map which takes an array and a function as arguments.
// Without utilizing any of the built-in methods available to your language, return an array with the function applied to each element.

function map(someFunction, array) {
    let resultArray = [];
    for(let i = 0; i < array.length; i++) {
        const item = array[i];
        resultArray.push(someFunction(item));
    }
    return resultArray;
};

const numbers = [1, 2, 3];
const addOne = (argument) => argument + 1;

const names = ['Tommy', 'Maxwell', 'Sara'];
const sayHello = (argument) => `Hi, ${argument}!`;

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

// adds one to each number in the array
console.log(map(addOne, numbers));
// says 'hi' to each name in the array
console.log(map(sayHello, names));

// returns just the cat owners' cat names
console.log(map(getCats, catOwners));
