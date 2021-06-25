
//=> arrow fn
let add=(num1,num2)=>num1+num2;


let sub=(num1,num2)=> num1-num2;

let cube=num=>num**3

// (param1,param2,,paramn)=>return stmnt;
console.log(add(10,20));
console.log(sub(50,10));
console.log(cube(3));



//create arrow fn for return num add or even

var num_chk=num=>num%2==0?"even":"odd"
console.log(num_chk(7));



/////////////////////////////////////////////////////////////

//array methods map(),filter(), reduce(),sort(),find(),some(),forEach()

////////////////////



//map()
var arr=[1,5,6,7,3,4]
//1 sqf{x} 1 5 sqfx{} 25

var squares=arr.map(num=>num**2)
console.log(squares);

var cubes=arr.map(num=>num**3)
console.log(cubes);



//////////////////////

//var names=["ram","ravi","raju","ajay","anu"]
//condtn ? filter()
//prnt all even nmbr %2==0
var evens=arr.filter(num=>num%2==0)
console.log(evens);




//forEach
var arr=[10,20,30,40]
//for(let num of arr){
//   console.log(num);
//}
arr.forEach(num=>console.log(num))