interface PlaySound{
    name:string;
    play():void;
    stop():void;
}

class MusicPlayer implements PlaySound{
    name:string="sample";

    play(): void {
        console.log(`${this.name}を再生しました。`);
    }

    stop(): void {
        console.log(`${this.name}を停止しました`);
    }
}

const mp=new MusicPlayer();
mp.play();
mp.stop();