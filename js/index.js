"use strict";
// 復習問題10-1 抽象クラスの作成,10-2
class Zukei {
}
class Eclipse extends Zukei {
    Draw() {
        console.log("楕円を描画します");
    }
}
const ep = new Eclipse;
ep.Draw;
