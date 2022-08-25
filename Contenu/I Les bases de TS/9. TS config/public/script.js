"use strict";
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5, 6];
console.log(newArr);
const pNodeList = document.querySelectorAll("p");
console.log(pNodeList);
const arrFromNodeList = [...pNodeList];
