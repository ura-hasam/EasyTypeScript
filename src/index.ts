function sampleFunction3():void{
    const x=1;

    if(x==1){
        const y=2;
        console.log(y);
        console.log(`if文内${globalVariable}`);
    }

    for(let i=0;i<1;i++){
        const z=3;
        console.log(`for文内:${globalVariable}`);
    }
    console.log(`関数内:${globalVariable}`)
}

const globalVariable:number=10;
console.log(`グローバルスコープ:${globalVariable}`);

sampleFunction3();