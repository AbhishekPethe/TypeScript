
// Regular Function

function add(num: number) {
    return num + 1
}

console.log(add(2));


// Arrow functions

const double = (x: number, y: number) => {
    return x + y
}

console.log(double(4,5));


//default value params

function greetme( age : number  , name: string = "Abhi") {
    return `hello ${name} age : ${age}`
}

console.log(greetme(21 ));

