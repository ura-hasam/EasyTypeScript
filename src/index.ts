console.log("問題6-1")
let start =0;
const end=10;
    while(start<=end){
        console.log(start);
        start++;
    }
    start=1;
console.log("==============")
console.log("問題6-2")
const finish=5
    do{
        console.log(start);
        start++;
    }while(start<=finish);
console.log("==============")
console.log("問題6-3")
    for(let i=0;i<=4;i++){
        console.log(i);
    }
console.log("==============")
console.log("問題6-4")
    const array=["a","b","c","d","e"];
    let sum=0;
    for(let alphabet of array){
        console.log(alphabet);
    }
console.log("==============")
console.log("問題6-5")
    for(let j=1;j<=10;j++){
        console.log(j);
        if(j===5){
            break;
        }
    }
console.log("==============")
console.log("問題6-6")
    for(let k=1;k<=10;k++){
        if(k%3===0){
            continue;
        }
        console.log(k)
    }
console.log("==============")