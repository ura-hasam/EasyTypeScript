// 復習問題10-1 抽象クラスの作成,10-2
abstract class Zukei{
    abstract Draw():void;
}

class Eclipse extends Zukei{
    Draw(): void {
        console.log("楕円を描画します");
    }
}

const ep= new Eclipse;
ep.Draw;

//インターフェイスの作成
interface Telephone{
    call():void;
}