'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits.length - 1);

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for fo
for (let fruit of fruits){
    console.log(fruit);
}

// c. forEach
// fruits.forEach(function(fruit, index, array) {
//     console.log(fruit, index, array);
// });
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an itmem to the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift와 unshift는 pop,push에 비해 느리다
// splice: remove an item by index position
fruits.push('🍓', '🍑','🍋');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf
// 있으면 해당 index. 없으면 -1
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
// includes
// 있으면 true 없으면 false
console.log(fruits.includes('🍎'));
// lastIndexOf
// 
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.lastIndexOf('🍎'));