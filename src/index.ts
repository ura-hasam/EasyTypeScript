abstract class Zukei{
    abstract Draw():void;
}

class Triangle extends Zukei{
    Draw(): void {
        console.log("三角形を描画します");
    }
}

const tri =new Triangle();
tri.Draw();