//this

var obj={
    name:"sona",
    age:9,
    fun: function(){
        console.log(this.name);
        console.log(this);
    }
}
obj.fun()

function fun2(){
    console.log(this)
}
fun2()

//new
function fun3(){
    let college="nith";
    this.college = college;
}
var obj1 =new fun3();
console.log(new fun3())
console.log(obj1.college);