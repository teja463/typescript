export class Human2{

    private gender: string;
    private firstName: string;
    private lastName: string;

    constructor(gender: string, firstName: string, lastName: string){
        this.gender = gender;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getDetails(){
        return this.firstName +" " + this.lastName +" is a "+ this.gender;
    }
}


