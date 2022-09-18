lert count =0;
let n=13;
for(let i=1;i<=n;i++){
if(n%i!=0){
count++;
}
}if(count==2){
console.log(n,"Yes it is a prime");
}
else{
console.log(n,"no it is not a prime");
}
