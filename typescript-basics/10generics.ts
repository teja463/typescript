/** 
 * Normal function with any type
 * @param msg
 */
function echo(msg: any){
    return msg;
}

let myString: string = echo(1);

/**
 * Generic function
 * @param msg 
 */
function echoGeneric<T>(msg: T): T{
    return msg;
}

// Below will give error because you sepcified type as number when you pass 1 to the function
// let myString2: string = echoGeneric(1);


class Human {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

class Admin extends Human{

}

class Manager extends Human{

}

let admin = new Admin("Admin", "A");
let manager = new Manager("Manager", "M");

/**
 * Generic function 
 * @param person 
 */
function personEcho<T extends Human>(person: T): T{
    return person;
}

var foo = personEcho(admin);
var bar = personEcho(manager);