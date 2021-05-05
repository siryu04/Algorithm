'use strict'

// 1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' ')
    console.log(result);
}

// 2. make an array out of a string
{
    const fruits = '🍓, 🍑, 🍋';
    const result = fruits.split(',', 2); 
    console.log(result);
}

// 3. make this array look like this: [5,4,3,2,1]
// array 자체도 변경
{
    const array = [1,2,3,4,5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
}

// 4. make new array without the first two elements
// splice는 배열 자체도 변경
// slice는 배열은 변경 x
{
    const array = [1,2,3,4,5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
}

class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
];

// 5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// 6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// 7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// map : 배열 안에 있는 모든 요소에 대해 함수를 적용 후 새로운 배열로 생성
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// 8. check if there is a student with the score lower than 50
// some : callback 함수의 return값에 true가 있는지 없는지 판별
// every : 배열의 모든 요소가 조건을 충족하여야 함
{
    const result = students.some((student) => student.score < 50);
    console.log(result);

    const result2 = students.every((student) => student.score < 50);
    console.log(result2);
}

// 9. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// 10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map((student) => student.score)
        .join();
    console.log(result);
}

// Bonus! do 10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b)
        .join();
    console.log(result);
}