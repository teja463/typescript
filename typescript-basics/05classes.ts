class Person{
    firstName: string;
    lastName: string;
    
    constructor(){
        this.firstName = " ";
        this.lastName = " ";
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    greet(){
        console.log("Hello World!! ");
    }
}

class Programmer extends Person{
    greet(){
        console.log("Hello Programmer");
    }

    greetLikeAPerson(){
        super.greet();
    }
}

var aPerson: Person;
aPerson = new Person();
console.log(aPerson);
aPerson.firstName = "Teja";
aPerson.lastName = "P";

console.log(aPerson);
console.log(aPerson.firstName);
console.log(aPerson.getFullName());

// Polymorphism we are assigng progammer object to a person type
var aProgrammer: Person= new Programmer();
console.log(aProgrammer.greet());
// Below will give compilation error because this method is not available in Person class
console.log(aProgrammer.greetLikeAPerson());