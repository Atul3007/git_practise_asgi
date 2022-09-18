lert count =0;
let n=28;
for(let i=1;i<=n;i++){
if(n%i!=0){
count++;
}
}if(count==2){
console.log(n,"yes");
}
else{
console.log(n,"no");
}
