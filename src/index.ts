try{
    const x=10;
    const y=0;
    if(y===0){
        throw new Error("ゼロで除算はできません");
    }

    const ans=x/y; //例外が発生するのでここは実行されない
    console.log(ans);
}catch{
    console.log("エラーが発生しました");
}finally{
    console.log("プログラムを終了します");
}