//var arr=[10,13,12,11,17,15,18,100,1000,2000]
//arr.sort((num1,num2)=>num1<num2)
//10<13 
//console.log(arr);





//////////////////
//binary search


var arr=[5,7,8,12]

arr.sort((num1,num2)=>num1-num2)


var element=11;
var flag=0;
let flag=0,upp=arr.length-1;
while(low<upp){
    let mid=math.floor((low+upp)/2)

    if(element>arr[mid]){
        low=mid+1;
    }
    else if(element<arr[mid]){
        upp=mid-1;
    }
    else if(element == arr[mid]){
        flag++;
        break;
   }
}


console.log(flag==0?"not found":"found");