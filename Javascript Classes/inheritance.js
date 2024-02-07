class User{
    constructor(name, age) {
        this.name = name
        this.age = age
        this.score = 0
    }

    login() {
        console.log(`${this.name} just logged in`);
        return this
    }

    logout() {
        console.log(`the age of ${this.name} is ${this.age}`);
        return this
    }

    updateScore() {
        this.score++
        return this
    }
}

class Admin extends User{
    deleteUser(user) {
        users = users.filter((each , i) => {
            return each.name != user.name 
        })
        return users
    }
}

let user1 = new User(name = "abc", age = 21)
let user2 = new User(name = "efg", age = 22)
let user3 = new User(name = "hij", age = 23)


let users = [user1 , user2 , user3]

let admin = new Admin(name = "xyz", age = 41)

console.log(admin);


// p1.updateScore().updateScore().updateScore()