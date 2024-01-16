

//  Regular  //

function sum(a: number, b: number): number  {
    return a * b
}

console.log(sum(3,4));


//  Arrow  //

const double1 = (a: number, b: number): number => {
    return a ** b
} 

console.log(double1(3, 4))


//  void  //

function hello(message: string) : void {
    // return message
    console.log(`Hello ${message}`);
}

console.log(hello("Abhishek"));


// never //

let y : never

function x(msg:string) : never{
    throw new Error("jj")
}

function reject() { 
    return x('Rejected');
 }
