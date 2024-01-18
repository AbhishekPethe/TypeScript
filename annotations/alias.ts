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

