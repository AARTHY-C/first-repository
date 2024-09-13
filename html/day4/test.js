array1=[5,10,2,3,7,5]
ans=[]
current=0
next=1
len=array1.length
if(len%2==0){
    while(next<=array1.length){
        sum=array1[current]+array1[next]
        ans.push(array1[current])
        ans.push(array1[next])
        ans.push(sum)
        ans.push(0)
        current+=2
        next+=2
    }
    
}
else{
    console.log("error")
}
console.log(ans)

string="aarthy"
ans=[]
for(i=0;i<string.length;i++){
    ans.push(string[i])
}
console.log(ans.length)
