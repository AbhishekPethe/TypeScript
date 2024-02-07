interface User {
    readonly email: string,
    dob: number,
    isOk: boolean
    contact? : number
    // getInfo: () => string
    getInfo(): string
    getCoupon(couponName : string) : string
}


// adding properties into existing interface

interface User {
    githubToken : string
}


// extend the interface  // inheritance

interface Admin extends User {
    adminId : number
}


const person: Admin = {
    email: "abc@gmail.com",
    dob: 12345,
    isOk: false,
    githubToken: "github",
    adminId : 123,
    getInfo:() => {
        return "abc"
    },
    getCoupon: (coupon : "save10") => {
        return coupon
    }
}

console.log(person);
console.log(person.getInfo());
// console.log(person.getCoupon());



export {}