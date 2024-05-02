class Vehicle { 
    constructor (make, year, model) {
        this.make = make;
        this.model = model;
        this.year = year;

    }
    honk() {
        return "beep";
    }
    toString() {
        return `The vehichle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle {
    constructor (make,model,year){

    super(make,model,year);
        this.numWheels = 4;
    }
}

// class Motorcycle extends Vehicle {
//     constuctor(make,model,year) {
       
//         super(make,model,year);
//         this.numWheels = 2;
//     }
//     revEngine() {
//         return "VROOOM!!"
//     }
// }

class Garage extends Vehicle{
    constructor (capacity){
        this.vehicles = [];
        this.capasity = capasity;

    }
    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)){
            return "Only Vehicles allowed";
        }
        if(this.vehicles.length >= this.capacity){
            return "Sorry we are full";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle Added";
    }

}

