//day3 13
string="may the soul rest in peace";
arr=[ ];
ans=" ";
for(i=0;i<string.length;i++){
    arr.push(string[i]);
}
for(j=0;j<arr.length;j++){
    if(arr[j]==" "){
        arr[j]="";
    }
}
for(k=0;k<arr.length;k++){
    ans +=arr[k];
}
console.log(ans);

//day3 14
a=23
b=98
c=a+b
a=c-a
b=c-a
console.log("a:",a)
console.log("b:",b)

//day2 8
num1=[1,2,2,1]
num2=[2,2]
ans=[ ]
for(i=0;i<num1.length;i++){
        if(num2.includes(num1[i])){
            ans.push(num1[i])
        }
    
}
console.log(ans)