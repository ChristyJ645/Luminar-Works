typeof(10);

// function to perform a specific task
//add two numbers


//function functionname(param1,param2),,,,{
    //function definition
    //return value
    
//}



function add(num1,num2){

    let res=num1+num2;
    
    return res
}
var res=add(50,50)
console.log(res);



///////////////////////cube of a nmbr


function cube(num1){
    return num1**3

}

console.log(cube(3));




////////////////////////////////////////////////////////////


//add(10,20)
//add(10,20,30)
add(10,20,30,40)





function add(...ar){
    let total=0;
    for(let num of ar){
        total+=num;
    }   
    return total;



}





//////////////////////////////////



function add(...args){

    let total=0;
    for(let num of args){
        total+=num;

    }

    return total;
    
}
console.log(add(10,20,30,40))


//////////////////////////////////////


var arr1=[10,20,30,40]

var arr2=[10,11.12,20]
//common elements from these two array


