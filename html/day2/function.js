function add(){
    val1=5;
    val2=5;
    val3=val1+val2;
    //console.log(val3)
    return val3
}
//add()
result=add()
console.log(result)

function add1(num1,num2){
    num3=num1+num2
    return num3
}
add1(2,1)
val=num3
console.log(val)

//area of circle
pi=3.14
function circle(r){
    area=pi*r*r
    return area
}
circle(3)
console.log(area)

//array-len,push,pop,sort,reverse
array1=[6,12,34,8,9]
len=array1.length
console.log(len)
array1.push(6)
console.log(array1)
array1.pop()
console.log(array1) 
b=array1.toString()  
console.log(b) 
type=typeof(b)
console.log(type)
array2=["van","car","bike","jeep","aeroplane"]                                   
console.log(array2.sort())   
console.log(array2.reverse())                                
text=array2.join(",")
console.log(text)
arr=[1,2,[3,4],5,6]
ans=arr.flat()
console.log(ans)

//string-trim,trimstart,trimend
fname="Aarthy" 
console.log(fname.length)
console.log(fname.toUpperCase())
console.log(fname.toLowerCase())
sname="Chenthil"
Name=fname.concat(" ",sname)
console.log(Name)
stat="                 fine            "
console.log(stat.trim())
console.log(fname.split(""))

veg=["carrot","beans","potato","califlower"]
b=veg.slice(1,4)
a=veg.splice(2,0,"cucumber","brinjal")
console.log(a)
console.log(b)