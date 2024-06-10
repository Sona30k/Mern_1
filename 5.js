/*let name=["sona","koushal","niharika","ashu","shruti"]
name.push(56);
name.unshift(1);
name.splice(2,2,"fuck");
console.log(name);
console.log(name[1]);
console.log(name.length);

let num=[10,20,30,40,50];
console.log(num);
for (let i=0 ;i<num.length;i++){
    console.log(num[i])
}
num.forEach((val,index,array) =>{
    console.log(val);
    console.log(index);

});

let a=num.map((val,ind) =>{
    return val +20;
});
console.log(a);

//concate
let x=[1,2,3,4,5]
let y=["a","b","c","d"]
console.log(x.concat(y));
console.log(x.indexOf(5));
let yo=x.slice(1,4);
let xo=y.splice(1,2);
console.log(xo);
console.log(yo)*/

let num=[1,2,3,4,566,19,23]
//console.log(num.toString());
let b =num.filter((val,ind,arr)=> {
    if (val>10 && val<=25){
        return val;
    }
})
console.log(b)

let x='1,2,3,4,5'
let arre =x.split(',');
arre.forEach(element => {
    console.log(element)
});