//inheritance
//parent=>child
//base=>derived
//super=>sub
class parent{
    phone(){
        console.log("samsungf41");
    }
}

class child extends parent
{


}
var obj=new child();
obj.phone();



////////////////////////////////////////////////////////////

class parent{
    m1(){
        console.log("inside m1 method");
    }
}

class child extends parent{
    m2(){
        console.log("inside m2 method");

    }
}

class subchild extends child{
m3(){
    console.log("inside m3 method");
}
}

var obj=new subchild();
obj.m3();
obj.m2();
obj.m1();

////

var obj2=new child();
obj2.m2()
obj2.m1()
//obj2.m3() error

//single inheritance,multilevel
//multiple:not supported


var obj3=new parent();
