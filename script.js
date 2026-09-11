console.log ("Hello World!");
const myName = `Reden Rayala`;
let Age = `20`;
const number = 9123456789;
const address = "Bacolod City, Negros Occidental, Philippines";
console.log(`Name: ${myName}`);
console.log(`Age: ${Age}`);
console.log(`Number: ${number}`);
console.log(`Address: ${address}`);

//functions
function greet(name) {
    return`Good Morning, ${name}`;
}
console.log(greet('Rene'));

//
function mdas(num1,num2) {
    let mul = num1 * num2;
    let div = num1 / num2;
    let add = num1 + num2;
    let sub = num1 - num2;
    return {mul, div, add, sub };
}
console.log (mdas(5, 3));   

    
