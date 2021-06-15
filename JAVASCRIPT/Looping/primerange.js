
var low=21,upp=40;


// print all prime bw 21 to 40 21,22
//21,,,,,,,,40;


for(let num=low;num<upp;num++){ //num=21, num=22 22<40
//num=22
let flag=0;
//num=21
for(let i=2;i<num;i++){  //i=3
if(num%i==0){ //21%2==0 21%3==0
    flag++; //flag=1
    break;
}

}
if (flag==0){ //flg==0
    console.log(num);
}

}


