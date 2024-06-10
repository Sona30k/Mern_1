//promise

function fun(task){
    return new Promise((accept,reject) =>{
        if(task){
            accept("hooo");

        }
        else{
            reject("shitt")
        }
    }
    )
}
let onResolve= (res) =>{
    console.log(res);
}
let onReject= (sad) =>{
    console.log(sad);
}
fun(false).then(onResolve).catch(onReject);