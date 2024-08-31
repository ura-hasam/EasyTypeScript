//復習問題9-1
class House{
    public color:string="白";
    public rooms:number=1;

    public activateSecurity(isOn:boolean){
        if(isOn){
            console.log("セキュリティを作動しました");
        }else{
            console.log("セキュリティを停止しました");
        }
    }
}

class FlyingHouse extends House{
    Fly():void{//フライメソッドの作成
        console.log("空を飛びます");
    }
}

const fh= new FlyingHouse;
// fh.Fly ←自分の解答:()が入っていない
fh.Fly();//解答

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
class Calculator{
    add(x:number,y:number):number;//x,yを受け取り、
    add(x:number,y:number,z:number):number;//x,y,zを受け取り、それらを加算してその結果を返すオーバーロード
    add(x:number,y:number,z?:number):number{//addメソッドの共通定義部分
        if(z !==undefined){//zがundefinedが未定義である場合
            return x+y+z;
        }
        return x+y;
    }
}

const calc=new Calculator();
console.log(calc.add(2,3,));
console.log(calc.add(2,3,4));