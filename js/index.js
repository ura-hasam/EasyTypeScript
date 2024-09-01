"use strict";
try {
    const x = 10;
    const y = 0;
    if (y === 0) {
        throw new Error("ゼロで除算はできません");
    }
    const ans = x / y; //例外が発生するのでここは実行されない
    console.log(ans);
}
catch (err) {
    console.log(err);
}
finally {
    console.log("プログラムを終了します");
}
try {
    throw new RangeError("範囲外エラー");
}
catch (err) {
    if (err instanceof SyntaxError) {
        console.log("構文エラーが発生しました。");
    }
    else if (err instanceof RangeError) {
        console.log("範囲外の操作が行われました");
    }
    else {
        console.log("その他の例外が発生しました");
    }
}
finally {
    console.log("プログラムを終了します");
}
