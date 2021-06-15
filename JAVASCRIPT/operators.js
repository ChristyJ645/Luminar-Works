// Arithmetic operators (+,-,*,%,**)
var num1="10";
var num2="3";
//console.log(num1%num2);
console.log(Math.floor(num1/num2));

//or console.log(10%3);





//Relational operators(<,>,<=,>=,!=,==)

//console.log(true<false);   //example

var num1=10;
var num2="10";
console.log(num1==num2); // true == content comparison
console.log(num1===num2); // false === both content and type strict match





//bitwise operators(&,|,^)

//&=>and
//|=>or
//^=>xor

// x      y      x&y     x/y    x^y
// 0      1       0       1      1
// 1      1       1       1      0
// 0      0       0       0      0
// 1      0       0       1      1


console.log(2&4);  //0010&0100 = 0000 =>0
console.log(2|4);  //0010|0100 = 0110 =>6
console.log(2^4);  //0010^0100 = 0110 =>6


