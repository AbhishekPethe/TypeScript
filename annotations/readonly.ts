type User = {
    readonly _id : number
    name: string,
    age: number,
    isOk: boolean,
    credit ?: number
}

let myUser: User = {
    _id: 300,
    name: "ab",
    age: 20,
    isOk : false
}

// myUser._id = 323   not allowed as it is readonly

console.log(myUser);


