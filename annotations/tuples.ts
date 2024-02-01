let user: (number | string)[] = [2, 3, 43 , 'a']

console.log(user);


// tuples => we ned to specify the values in the same order of initialization

let tUser: [number, string, boolean] = [1, 'a', false]

// tUser.push("v")  can do this , one of the drawbacks of tuples
console.log(tUser);


export {}