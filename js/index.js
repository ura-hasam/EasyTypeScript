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
class VideoPlayer {
    constructor() {
        this.videoName = "Sample Video";
        this.name = "sample";
    }
    playVideo() {
        console.log(`${this.videoName}を再生しました。`);
    }
    stopVideo() {
        console.log(`${this.videoName}を停止しました`);
    }
    play() {
        console.log(`${this.name}を再生しました。`);
    }
    stop() {
        console.log(`${this.name}を停止しました`);
    }
}
const vp = new VideoPlayer();
vp.playVideo();
vp.stopVideo();
vp.play();
vp.stop();
