const x=5;
let msg:string="";

if (x>10){
    msg="xは10より大きい";
}
else{
    msg="xは10以下です";
}
console.log(msg);

//三項演算子の例
msg = x>10 ? "xは10より大きい" : "xは10以下です";
console.log(msg);