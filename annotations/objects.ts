
//   Object   //

const person: { firstName: string ;  lastName: string ;  age: number } = {

        firstName: "gojo",
        lastName: "saturo",
        age: 29

}

console.log("object : " , person);


//    function returning a object   ///

function printUser(): { firstName: string , lastName: string, age: number }{
    return {
        firstName: "gojo",
        lastName: "saturo",
        age : 25
        
    }

}

const res = printUser()
console.log(person);

// console.log(res);

// console.log(res.firstName, res.lastName, `age : ${res.age}`);


const arrowPerson = (): { firstName: string, age: number, isOk: boolean } => {
    return {
        firstName: "abhi",
        age: 20,
        isOk : false
    }
}
console.log(arrowPerson());
