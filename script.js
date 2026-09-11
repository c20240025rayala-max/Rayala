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
    return (`Value: ${num1}, ${num2}: { mul: ${mul}, div: ${div}, add: ${add}, sub: ${sub} }`);
}
console.log (mdas(5, 3));

const heading = document.querySelector("h1");
    console.log(heading);

    const heading2 = document.querySelector("#contact h2");
    console.log(heading2);
    const heading3 = document.querySelector("#services h2");
    console.log(heading3);
 

    


