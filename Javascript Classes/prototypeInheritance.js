function User(name, age) {
    this.name = name
    this.age = age
    this.online = false
}

User.prototype.login = function () {
    console.log(`${this.name} has logged in`);
}

User.prototype.logout = function () {
    console.log(`${this.name} has logged out`);
}



function Admin(...args) {
    User.apply(this, args)
    this.role = "super admin"
}

// inheriting the methods
Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function (user) {
    users = users.filter((each , i) => {
        return each.name != user.name
    })
}
let user1 = new User("a", 21)
let user2 = new User("b", 22)
let user3 = new User("c", 23)

let users = [user1 , user2 , user3 ]




let admin = new Admin("b", 22)

