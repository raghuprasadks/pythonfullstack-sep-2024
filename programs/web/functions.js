console.log('functions');

function greet(){
    console.log('welcome to greet function')
}

greet()

function greetUser(name){
    console.log('welcome to greetUser function', name)
}   

greetUser('John')   

function add (num1,num2){
    return num1+num2
}
total = add(100,200)
console.log('total:', total)

subtract = function (num1,num2){
    return num1-num2
}
console.log('subtract:', subtract)

difference = subtract(400,200)
console.log("differece is ",difference)

multiply = (n1,n2)=>n1*n2

result = multiply(10,15)
console.log("arrow function ",result)

greetarrow = ()=>console.log('greeting with arrow function')
greetarrow()