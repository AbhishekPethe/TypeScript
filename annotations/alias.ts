type Person = {
    name : string,
    age : number
}

const func = ( person: Person ) => {
    return (`name : ${person.name} age : ${person.age}`);
    
}

const res1 = func({ name: "abhi", age: 30 })
console.log(res1);


// object  //

const myPerson: Person = {name : "ab" , age : 200}
console.log(func(myPerson));



//   mutlipe alias   ///

type cardName = {
    name : string
}

type cardNumber = {
    number : number
}

type cardDetails = cardNumber & cardName & {
    cvv : number
}

const show = (details : cardDetails) : cardDetails => {
    return details
}

console.log(show({name : "icici" , number : 1234 , cvv : 321}));
