class MyUtility{
    printNumber<T>(arr:T[]):void{
        for(const val of arr){
            console.log(val);
        }
    }
}

const nums=[1,2,3,4,5];
const names=["Steve","Bill","Mark"];
const util=new MyUtility();
util.printNumber<number>(nums);
util.printNumber<string>(names);

//ジェネリッククラスの使用例
class MyData<T>{
    private vals:T[]=[];

    addValue(item:T){
        this.vals.push(item);
    }

    getValue(index:number):T{
        return this.vals[index];
    }
}

const dataNum=new MyData<number>();
dataNum.addValue(5);
dataNum.addValue(3);
console.log(dataNum.getValue(1));

const dataStr=new MyData<string>();
dataStr.addValue("apple");
dataStr.addValue("orange");
console.log(dataStr.getValue(1));