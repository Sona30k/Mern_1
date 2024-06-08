//callback : ek function ko dusre function me argument jaise lete h
function fun(val){
    console.log(val);
}
function add(a,b,caller){
    let sum=a+b;
    caller(sum)

}
add(5,10,fun)

//callback hell

function load(callback){
    setTimeout(() =>{
        console.log("1 -loading data.....")
        callback();

    },4000)
    
}
function collect(callback){
    setTimeout(() =>{
        console.log("2-collecting data");
        callback();

    },5000)
    
}
function approve(callback){
    setTimeout (() =>{
        console.log("3-aprroving adta")
        callback();

    },6000)
    
}

function done(){
    console.log("4- yayaa donee")
}
load(function(){
    collect(function(){
        approve(function(){
            done();

        });
        

    });
    

});
