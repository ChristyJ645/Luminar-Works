var employees=[
    [1000,"ajay","develepor",20000,2],
    [1001,"ram","developer",22000,2],
    [1002,"ravi","qa",25000,3],
    [1003,"raju","qa",20000,1],
    [1000,"nikil","mrkt",30000,2],

]


//print emplye names only


for(let employee of employees){
    console.log(employee[1]);  //[1000,"ajay",...............]
}

//employee salary only

for(let employee of employees){
    console.log(employee[3]);
}

//print employee details whoese designator=developer?
for(let emp of employees){
    if(emp[2]=="developer"){
        console.log(emp);
    }
}


//print employee details whose salary<22000

for(let emp of employees){
    if(emp[3]<22000){
        console.log(emp)
    }
}









///////////////////////////////////////////////wooooorrrkkkk////////////////////
var products=[
    [100,"ricepowder",30,10],
    [101,"oreo",35,100],
    [102,"darkfantacy",40,50],
    [103,"fifty",20,5],
    [104,"horlicks",200,5],
    [105,"complan",190,0],
    [106,"boost",250,10],
    [107,"item1",5,10],
    
]

// print number of product in this shop  7

// print number of product in stock 6

// print costly product


// print losw_cost product

// is there any item available under rs 10 ? true

// print deatils of boost


