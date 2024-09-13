age=100
if (age>=18 && age<=24){
    console.log("You can vote but not rent a car")
}
else if(age>=16 && age <=17){
    console.log("you can drive but not vote")
}
else if (age >25){
    console.log("you can do pretty much anything")
}
else{
    console.log("you can't drive")
}

// //for loop
// for(i=2;i<=20;i+=2){
   
//         console.log(i)
    
// }

a=[1,8,11,7,5,9,12]
even=[]
odd=[]
for (i=0;i<a.length;i++){
    if(a[i]%2==0){
        even.push(a[i])
    }
    else{
        odd.push(a[i])
    }
}
console.log(even)
console.log(odd)