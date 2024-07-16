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

//三項演算子のネスト
const grade=75;
const result = grade>=90 ? "優秀" : grade >=70 ? "良好" : "普通";
console.log(result);