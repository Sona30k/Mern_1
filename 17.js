//callback : ek function ko dusre function me argument jaise lete h
function fun(val){
    console.log(val);
}
function add(a,b,caller){
    let sum=a+b;
    caller(sum)

}
add(5,10,fun)

//callback hell &by promise

function load(){
    return new Promise((accept,reject)=>{
        
        setTimeout(() =>{
            console.log("1 -loading data.....")
            accept();
            
    
        },4000)

    })
    
    
}
function collect(){
    return new Promise((accept,reject) =>{
        setTimeout(() =>{
            console.log("2-collecting data");
            accept();
            
    
        },5000)

    })

    
    
}
function approve(){
    return new Promise((accept,reject)=>{
        setTimeout (() =>{
            console.log("3-aprroving adta")
            reject('errorr');
            
    
        },6000)

    })
   
    
}

function done(){
    console.log("4- yayaa donee")
}
/*load(function(){
    collect(function(){
        approve(function(){
            done();

        });
        

    });
    

});
*/

load().then(collect).then(approve).then(done).catch((err)=>{
    console.log(err)
})