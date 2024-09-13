//set4 8
for(i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }
    else if(i%3==0){
        console.log("Fizz")
    }
    else if(i%5==0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}

//set5 1
for(i=1;i<=10;i++){
  console.log(i)
}

//set5 2
for(i=1;i<=20;i++){
    if(i%2==0){
        console.log(i)
    }
}

//set5 3
for(i=1;i<=20;i++){
    if(i%2!=0){
        console.log(i)
    }
}




//set5 10
a=[10,20,30,40,10]
len=a.length-1
if(a[0]==a[len]){
    console.log("True")
}

//set5 12
vowel=["a","e","i","o","u"]
char="b"
val=false
len=vowel.length
for(i=0;i<len;i++){
    if(char==vowel[i]){
        val=true
    }
}
if(val){
    console.log("vowel")
}
else{
    console.log("consonant")
}



//set5 13
even_count=0
odd_count=0
for(i=1;i<=10;i++){
    if(i%2==0){
        even_count+=1
    }
    else{
        odd_count+=1
    }
}
console.log("Even:",even_count)
console.log("odd:",odd_count)

//set5 14
for(i=1;i<=25;i++){
    if(i%5!=0){
        console.log(i)
    }
    else{
        i++
    }
}

//set5 15
array1=[2,3,4,5]
fact=[]
for(i=0;i<array1.length;i++){
    ans=1
    for(j=1;j<=array1[i];j++){
        ans=ans*j
    }
    fact.push(ans)
}
console.log(fact)

//set5 16
a=4
b=2
pro=a*b
console.log(pro)
if(pro>500){
    sum=a+b
    console.log(sum)
}

//set5 17
a=25
b=98
if(a>b){
    console.log("greater no:",a)
}
else{
    console.log("greater no:",b)
}

//set5 18
a=250
b=100
c=6500
if(a>b && a>c){
    console.log("greater no:",a)
}
else if(b>a && b>c){
    console.log("greater no:",b)
}
else{
    console.log("greater no:",c)
}

//set5 19
x=[23,4,-6,13,-9,21,3,-45,-8]
positive=[]
negative=[]
for(i=0;i<x.length;i++){
    if(x[i]<0){
        negative.push(x[i])
    }
    else{
        positive.push(x[i])
    }
}
console.log(negative)
console.log(positive)

//12
val1=12
function fun(){
    val1=10
}
console.log(val1)

//pattern
