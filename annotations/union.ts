

let score: number | string = 12

score = 21

score = "21"

console.log(score);



///  with type alias   ///

type A1 = {
    name: string,
    age : number
}

type A2 = {
    userName : string , 
    age : number
}

let A3: A1 | A2 = {
    name: "ab",
    age : 30
}

A3 = {
    name : "av",
    userName: "ac",
    age : 40
}

console.log(A3);

// with functions //

const func1 = (id : number | string) => {
    console.log(`maybe string or number ${id}`);
    // id.toLowerCase()  error
}

func1(1)
func1("a")

// solving the above error //

const func2 = (id: number | string): number | string => {
    if (typeof id === "string") {
        return id.toLowerCase()
    }
    else if (typeof id === "number") {
        return id += 2
    }
    throw new Error("type must be number")
}

console.log(func2("JHSAFJK"));
console.log(func2(5));


//  arrays with union  //

const arr: (number | string)[] = []
arr.push(10)
arr.push("a")
console.log(arr);


/// literal annotation ///

let pi: 3.14 = 3.14
// pi = 2.34  // error

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
console.log(seatAllotment);   ///aisle

// seatAllotment = "crew"   ///error

export {}