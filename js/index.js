"use strict";
class MusicPlayer {
    constructor() {
        this.name = "sample";
    }
    play() {
        console.log(`${this.name}を再生しました。`);
    }
    stop() {
        console.log(`${this.name}を停止しました`);
    }
}
const mp = new MusicPlayer();
mp.play();
mp.stop();
