//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract(a,b){
    alert(a-b)
}
//create a function that divides three numbers and console logs the quotient
function divide(a,b,c){
    console.log(a/b/c)
}
//create a function that multiplys three numbers and returns the product
function multiply(a,b,c){
    return a*b*c
}
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function medium(a,b,c){
    return (a+b) % c
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function hard(a,b,c,d){
    if (a*b > 100){
        console.log(c+d)
    }
    else if (a * b < 100){
        console.log(c-d)
    }
    else if (a * b === 100){
        alert(a * b * c % d)
    }
}