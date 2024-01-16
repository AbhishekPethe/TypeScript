type Person = {
    name : string
}

const person: Person =  {
    name : "John"
}



let a: number = 2
a = 3

console.log(person.name);
console.log(a);


let bool: boolean = false
console.log(bool);


//any type
//we can change the values any time unlike above 
let b: any = "abc"
// b = 123
// b();
b.toUpperCase()
console.log(b);

