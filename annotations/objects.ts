
//   Object   //

const person: { firstName: string ;  lastName: string ;  age: number } = {

        firstName: "gojo",
        lastName: "saturo",
        age: 29

}


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
