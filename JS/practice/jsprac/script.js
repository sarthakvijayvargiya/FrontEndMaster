"use strict";
//1- this in global scope

console.log(this); //globalObject
// this KW in global space represent global object
// In case of browser this is window , and in NodeJS value will be global.

// Also 'this' works differently on strict mode and non-strict mode\

//2- 'this' inside a function

function x() {
  // 'this' inside a function depends on strict / non-strict mode
  console.log(this);
  // in non-strict it is gobalObject / in strict mode it is undefined
}
x();
// 'this' substitution concept --
// if the value of 'this' is undefined or null at any point of time so 'this' will be replaced by global object only in non-strict mode.

// NOTE -- if interviewr ask what is value of 'this' inside a function --
// Say - value of 'this' inside a function is undefined but bcz JS has 'this' substitution so the value becomes globalObject is we not use 'strict mode'

// [now we see everything in strict mode]
//3- the value of 'this' is also depends on how the function is called (runtime binding)
x(); //gives undefined
window.x(); //gives window as 'this'

// 4- 'this' inside objects method
// remember if you make function as a part of object it is known as method
// x is a method of object obj
const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};
obj.x(); // value of this KW is obj itself this.a gives 10;

// 5- call apply and bind methods (sharing method)
// these are used when we have to share methods
// example
const student = {
  name: "Akshay",
  printName: function () {
    console.log(this.name);
  },
};
student.printName();
//we want printName method in student2
const student2 = {
  name: "Deepika",
};

// by doing below steps we update 'this' KW to point to student2
student.printName.call(student2);

// 6- this inside arrow function
// arrow doesnt have concept of this , but it took 'this'  of its lexical environment
// arrow function doesnt provide their own this binding
const obj2 = {
  a: 10,
  x: () => {
    console.log(this);
  },
};
// obj2 is lexically present inside global so 'this' points to globalObject (window)

// 7- this inside nested arrow function
// Here 'this' KW is obj3 as arrow function is enclosed inside function
const obj3 = {
  a: 10,
  x: function () {
    const z = () => {
      console.log(this);
    };
    z();
  },
};

// 8- this inside DOM
// this inside dom is that particular element ==  reference to that html element

// 9-  this inside class and constructor