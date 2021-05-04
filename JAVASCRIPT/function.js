'use strict';

//Function
// 기본적인 building block
// subprogram 이라고도 불리며 여러번 재사용 가능
// 한 가지의 task나 값을 계산하기 위해 사용

// 1. Function declaration
// function name(param1, param2) {body... return; }
// one function === one thing
// naming: doSomething, command, verb
// function is object in JS

function log(message) {
    console.log(message);
}
log('Hello');
log(1234);

// 2. Parameters
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3.Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
// 배열 형태로 전달.
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    /*
    for(const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
    */
}
printAll('dream', 'coding', 'ellie');

// 5. Return a value
function sum(a, b){
    return a + b;
}

// 6. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        // long  upgrade logic....
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic...
}

// First-class function
// 1. Function expression
// 함수의 hoisting이 가능 (선언 전에 호출 하여도 사용 가능)

const print = function (){
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

const printYes = function(){
    console.log('yes!');
};

const printNo = function(){
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//     console.log('simplePrint');
// }

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();