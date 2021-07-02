//polymorphism
// more than one form
 var person={
     age:25,
     name:"ram",
     printperson:function(){
         return this.age+this.name
     }
 }


 //1) method overloading
 //same method name,different number of parameters

 class calculation{
     add(){
         console.log("inside no arg method");
     }
     add(num1){
         console.log("inside one arg method");
     }
     add(num1,num2){
         console.log("inside two arg method");
     }
 }
var calc=new calculation();
calc.add();
calc.add(10);
calc.add(10,20);



//2) method overriding
class parent{
    bike(){
        console.log("passion pro");
    }
    phone(){
        console.log("samsung");
    }
}

class child extends parent{

    phone(){
        console.log("iphone");
    }
    bike(){
        console.log("re350");
    }

}
var child=new child()
child.phone()
child.bike()

//////documentobjectmodel