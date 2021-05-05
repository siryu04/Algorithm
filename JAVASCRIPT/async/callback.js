"use strict";

// Synchronous callback (동기적 callback)
function printImmediately(print) {
  print();
}
// Asynchronous callback (비동기적 callback)
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

// JavaScript is synchronous. (동기적)
// hoisting: var, function 등이 자동으로 제일 위로 선언
console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);

printImmediately(() => console.log("hello"));

printWithDelay(() => console.log("async callback"), 2000);
console.clear();

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if ((id === "ellie" && password === "dream") || (id === "coder" && password === "academy")) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userSotrage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userSotrage.loginUser(
  id,
  password,
  user => {
    userSotrage.getRoles(
      user,
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);
