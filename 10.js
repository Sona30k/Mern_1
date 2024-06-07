//function inside functions

function fun(){
    console.log("i am function 1");
    function fun2(){
        console.log("i am function 2");
    }
    fun2()

}
fun();

//lexical scope
var a=0
function fun1(){
    var a=1; //lexical scope for fun3
    console.log("yayaya i am sad" +a)
    function fun3(){
       var a=2;
        console.log("hohoho i am happy" +a)
    }
    fun3();
}
fun1();

