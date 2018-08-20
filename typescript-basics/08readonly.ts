// Readonly
class Vehicle{
    readonly type: string;
    constructor(type: string){
        this.type = type;
    }

    getType(){
        return this.type;
    }
}

let bike = new Vehicle("Bike");
console.log(bike.getType());
// Below one gives error because you it is readonly
bike.type = "Scooter";
console.log(bike.type);