"use strict";
//復習問題9-1
class House {
    constructor() {
        this.color = "白";
        this.rooms = 1;
    }
    activateSecurity(isOn) {
        if (isOn) {
            console.log("セキュリティを作動しました");
        }
        else {
            console.log("セキュリティを停止しました");
        }
    }
}
class FlyingHouse extends House {
    Fly() {
        console.log("空を飛びます");
    }
}
const fh = new FlyingHouse;
// fh.Fly ←自分の解答:()が入っていない
fh.Fly(); //解答
//復習問題9-2
// class Calculator{
//     add(int:number,int2:number):number;
//     add(int:number,int2:number,int3?:number){
//         if(int3){
//             return int+int2+int3
//         }else{
//             return int+int2
//         }
//     }
// }
// const sum=new Calculator;
// sum.add(1,2);　以上のコードではエラーが発生し動かなかった。
//以下正解の解答
class Calculator {
    add(x, y, z) {
        if (z !== undefined) { //zがundefinedが未定義である場合
            return x + y + z;
        }
        return x + y;
    }
}
const calc = new Calculator();
console.log(calc.add(2, 3));
console.log(calc.add(2, 3, 4));
