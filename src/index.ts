//問題11-1,2,3
try{
    throw new Error("未知のエラーが発生しました")
}catch(err){
    console.log(err);
}finally{
    console.log("処理が正常に終了しました。")
}


//問題11-4
class MyException extends Error{
    constructor(message:string){
        super(message);
    }
}

try{
    throw new Error("未知のエラーが発生しました")
}catch(err){
    console.log(err);
}

//問題11-5
class FileNotException extends Error{
    constructor(message:string){
        super(message);
    }
}

try{
    throw new Error("未知のエラーが発生しました")
}catch(err){
    console.log(err);
}