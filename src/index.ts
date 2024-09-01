class MyException extends Error{
    constructor(message:string){
        super(message);
        this.name="MyException";
    }
}

try{
    throw new MyException("カスタム例外が発生しました");
}catch (err){
    console.log(err);
}