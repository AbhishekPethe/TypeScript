const obj1 = {
    name: "Naruto",
    age: 15,
    Ninja() {
        console.log(this.name ,  "is Ninja");
    },
    Age() {
        console.log("Age is" , this.age)
    }

}

console.log(obj1);
obj1.Ninja()
obj1.Age()


// updating properties
obj1.name = "Sasuke"

obj1["age"]  = 16

// adding property

obj1.village = "Konoha"

console.log(obj1);