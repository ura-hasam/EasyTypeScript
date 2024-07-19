let currentPage =1;
const totalPages =10;

while (currentPage<=totalPages){
    console.log(`現在${currentPage}ページをよんでいます`);
    currentPage++;
}
console.log("全ページを読み終えました。")
console.log("===================================")
do{
    console.log(`現在${currentPage}ページを読みました`);
    currentPage++;  
}while(currentPage <=totalPages);
console.log("完了");