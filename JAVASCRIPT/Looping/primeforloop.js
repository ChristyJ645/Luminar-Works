// chck given number is prime or not

var num=8; 
var flag=0;
//2,10
for(let i=2;i<num;i++){ 
    if(num%1==0){ 
  //factor
  flag++;
    }
}
console.log(flag==0? "prime": "not prime");