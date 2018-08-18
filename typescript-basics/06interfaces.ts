interface PersonInterface{
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class Foo implements PersonInterface{
    firstName: string;    lastName: string;

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }

}

var foo: PersonInterface = new Foo();
foo.firstName = "Teja"
foo.lastName="P";
console.log(foo.getFullName())

let someObj = {
    firstName: "test",
    lastName: "test",
    middleName: "middle",
    getFullName : () => "test"
}

foo = someObj;
console.log(foo.getFullName());