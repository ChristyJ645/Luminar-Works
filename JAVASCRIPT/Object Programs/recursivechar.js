//ABAC

var pattern="ABAC"
var dict={}

for (let char of pattern){//
    if(char in dict){
        console.log("fisrt recursivechar",char);
        break

    }
   else{
       dict[char]=1
   }
}

//key     value
//A          1
//B          1