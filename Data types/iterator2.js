let str = "Hello";

// does the same as
// for (let chaf of str) console.log(char);

let iterator = str[Symbol.iterator]();

while (ture) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);// outputs characters one by one
}