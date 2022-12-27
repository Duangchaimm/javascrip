//Arrow function with two arguments
const sum = (firsParam , secondParam) => {
    return firsParam + secondParam

};
console.log (sum(2,5));//Prints:7

//Arrow function with no arguments
const printHello= () => {
    console.log("hello");

};
printHello();//Print: hello

//Arrow function with a single argument
const checkWeight = (weight) => {
    console.log (`Baggage weight : ${weight} kilograms.`)

};
checkWeight (25);//Print:Baggage weight : 25 kilograms

//Concise arrow functions
const multipy = (a,b) => a*b ;
console.log (multipy(2,30));//Prints: 60
