//object
//key,value
//arrray[]
//object {} property:value ,key:value
//prop/keys=>jan feb march april may
//values are fetch by using corresponding key or property


var expense={jan:1000,feb:15000,march:22000,april:23000,may:20000}


//either expense[property/key] or expense.property/key
console.log(expense.march);
console.log(expense["march"]);


//may

console.log(expense.may);
console.log(expense["may"]);





//june:25000
//addinga new property value

expense.june=25000
console.log(expense);
//or

expense["june"]=25000
console.log(expense);



//adding expns fr mrch
expense.march+=3000;
console.log(expense);



///chck july is there or not
console.log("july"in expense);


//chck for july is present, if not add july:25000
if("july"in expense){
    //cntrl
}
else{
    expense.july=25000;
}
console.log(expense);
//or
if(!("july" in expense)){
    expense.july=25000;
}
console.log(expense);