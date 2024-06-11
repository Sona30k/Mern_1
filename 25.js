//try catch and throw

function day(a,b){
    try{
        if(b==0){
            throw new Error("not divisible by 0")
        }
        else{
            console.log (a/b);
        }
    }catch(err){
        console.log(err.message)
    }
    
}
day(10,0);


//fect api

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response =>{
    if (!response.ok){
        throw new Error("wrong bitch")
    }
    return response.json();
})
.then(data => data.forEach (element => {
    console.log(element)
    console.log(element.title)
}))
//.catch(error => console.log("error"))