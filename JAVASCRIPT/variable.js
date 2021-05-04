// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (don't ever use this!)
// hoisting : 어디에 선언했는지는 관계없이 항상 제일 위로 선언을 끌어 올려주는 것!

// 3. constant (const)
// 재선언 및 할당된 값을 변경 불가.
// 보안. thread의 안전. 실수 방지

// 4. Variable types
// function, first-class function(변수에 함수를 할당, return 타입에 함수를 할당)
 
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn =  `not a number` / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (최근 추가. chrome가능. 숫자 뒤에 n)

// string
const char = `c`;
const brendan = `brendan`;
const greeting = `hello ` + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
// symbol은 그냥 출력 시 error 발생하므로 .description을 추가 해야함.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 5. Dynamic typingf