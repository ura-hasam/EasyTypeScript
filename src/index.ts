function getFirstElement<T>(arr:T[]):T{
    return arr[0];
}
//number型の配列
const numbers:number[]=[1,2,3,4,5];
const firstNumber=getFirstElement(numbers);
console.log(firstNumber);

// string型の配列
const strings:string[]=["りんご","みかん","バナナ"];
const firstString=getFirstElement(strings);
console.log(firstString);