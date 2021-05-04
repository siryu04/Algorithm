'use strict';

// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Logical operators : || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or),, finds the first truthy value
// 하나라도 true이면 true. 그러므로 맨 앞에 가장 가벼운 설정값을 둘 것. 무거울수록 뒤에 배치
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
// 하나라도 false이면 false. 그러므로 맨 앞에 가장 가벼운 설정값을 둘 것. 무거울수록 뒤에 배치
console.log(`and: ${value1 && value2 && check()}`);

function check(){
  for (let i = 0; i < 10; i++){
    //wasting time
    console.log(`..`);
  }
  return true;
}

// ! (not)
console.log(!value1);

// Ternary operator: ?
// condition ? value1 : value2;
const name = 'df';
console.log(name === 'ellie' ? 'yes' : 'no');
