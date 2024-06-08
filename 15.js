//recursion : function calling itself

function nun(n){
    if (n<=10){
        console.log(n);
        nun(n+1)

    }

}
nun(1)

//factorial

//3=3*2*1

function fact(s){
    debugger;
    if(s==0){
        return 1
    }
    else{
        return s*fact(s-1);
    }
    

}
console.log(fact(6))


