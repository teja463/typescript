// Approach 1
class Car{
    private make: string;
    private model: string;
    
    constructor(make: string, model: string){
        this.model = model;
        this.make = make;
    }

    getMake(){
        return this.make;
    }

    setMake(make: string){
        this.make = make;
    }

    getModel(){
        return this.model;
    }

    setModel(model: string){
        this.model = model;
    }

    public getCarDetails(){
        return this.make + " " + this.model;
    }
}

let bmw = new Car("BMW", "2016");
console.log(bmw.getCarDetails());

// Approach 2 - Shortcut for constructor
class Animal{
    
    constructor(private type: string, private name: string){

    }

    // Write gettes and setter 

    public getDetails(){
        return this.type + " " + this.name;
    }
}

let dog = new Animal("Dog", "dog");
console.log(dog.getDetails());

