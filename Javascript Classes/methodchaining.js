class Obj {
    constructor(name , age) {
        this.name = name
        this.age = age
        this.score = 0
    }
    login() {
        console.log(this.name, "just logged in");
        return this
    }
    logout() {
        console.log(`man with age ${this.age} logged out`);
        return this
    }
    updateScore() {
        this.score++
        console.log(`score of ${this.name} now is ${this.score}`);
        return this
    }
}

// return this means we are returning the instance of that object 

let v1 = new Obj(name = "raichi", age = 16)
let v2 = new Obj(name = "reo", age = 17)


v1.login().logout().updateScore().updateScore()   //chaining


// console.log(v1);
// v1.updateScore()