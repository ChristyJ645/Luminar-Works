//array ?  collection of same and different types of objects
//length limit? no length limit to javascript array
//define? []
// is it possible to update?
//insertion order is preserved or not?
//duplicates or not?



//var expenses=[30000,25000,27000,25000,25000]
//feb

//console.log(expenses[1]);//25000

//may +2000
//expenses[4]+=2000;
//console.log(expenses);


//////////////////////////////////////////////////////////////////
//var expenses=[30000,25000,27000,25000,25000]
//for(let i=0;i<expenses.length;i++){
  // console.log(expenses[i]);
//}

////////////////////////////////////////////////////////////////

var expenses=[30000,25000,27000,25000,25000]

for(let exp of expenses){
  console.log(exp);
}


////////////////////////////////////////
//total expense


var totalexp=0;
for(let exp of expenses){
    totslexp+=exp;
}

console.log("total exp",totalexp);


//////////////////////////////
//print all exp > 25000
for let



////////////////////////

//highest exp?

var maxexp=0;
for(let exp of expenses){
    if(exp>max_exp){
        max_exp=exp;
    }
}

console.log("highest_exp");