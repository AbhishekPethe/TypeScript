// constructor under the hood
function User(name, age) {
    this.name = name
    this.age = age
    this.online = false
    this.inside = function () {
        console.log(`age of ${this.name} is ${this.age}`);
    }  // this function will be in the object directly 
}

// the below functions will be inside __proto__
// same as when we use the class keyword

User.prototype.login = function () {
    this.online = true
    console.log(this.name , "has logged in");
}

User.prototype.logout = function(){
    this.online = false
    console.log(this.name , "has logged out");
}

let p1 = new User(name = "abc", age = 30)

