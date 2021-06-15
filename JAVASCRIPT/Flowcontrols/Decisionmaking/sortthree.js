var num1=10, num2=20, num3=15;




if((num1>num2)&(num1>num3)){


    //block highest num1

    console.log(num1,num2,num3);
}
else{
    console.log(num1,num3,num2);

}


// & bitwise
// && logical

if((num2>num1)&(num2>num3)){

    //block highest num1
    if(num1>num3){
        //num1 num2 num3
        console.log(num1,num2,num3);

    }
    else{
        console.log(num1,num3,num2);
    
    }
    else if(num1<num3){
        console.log(num1,num3,num2);
    }
else{

}
}