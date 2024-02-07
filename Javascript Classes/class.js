class Obj {
    constructor(name , age) {
        this.name = name
        this.age = age
    }
    login() {
        console.log(this.name , "just logged in");
    }
    logout() {
        console.log(`man with age ${this.age} logged out`);
    }


}

let v1 = new Obj(name = "a", age = 10)
v1.login()
v1.logout()
console.log(v1);

let v2 = new Obj(name = "b", age = 20)
console.log(v2);
