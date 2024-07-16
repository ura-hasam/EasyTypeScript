//問題5-1
    console.log("問題5-1");
        let num:number=3;
        if(num>=10){
            console.log("OK");
        }else{
            console.log("NG");
        }
        console.log("---------");
        num>=10 ? console.log("OK") : console.log("NG");
        console.log(num>=10 ? "OK":"NG");//答え
    console.log("============");
//問題5-2
    console.log("問題5-2");
        const color:string="orenge"
        if(color==="red"){
            console.log("赤");
        }else if(color==="blue"){
            console.log("青");
        }else{
            console.log("その他");
        }
        console.log("---------");
        switch(color){
            case "red":
                console.log("赤");
                break;
            case "blue":
                console.log("青");
                break;
            default:
                console.log("その他");
                break;
        }
    console.log("============");
//問題5-3
    console.log("問題5-3");
        const score:number=75;
        if(score>=80){
            console.log("優");
        }else if(score>=60){
            console.log("良")
        }else if(score>=40){
            console.log("可");
        }else{
            console.log("不可");
        }
    console.log("============");
//問題5-4
    console.log("問題5-4");
        const animal:string="cat";
        switch(animal){
            case "dog":
                console.log("犬");
                break;
            case "cat":
                console.log("猫");
                break;
            case "bird":
                console.log("鳥");
                break;
            default:
                console.log("該当なし");
                break;
        }
    console.log("============");