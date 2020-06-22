export class Vehicle {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving`)
    }
    stop() {
        console.log(`${this.name} stopped`)
    }
}
export class Ship extends Vehicle {
    constructor(name, numverOfWheels, maxSpeed) {
        super(name, false);
        this.numverOfWheels = numverOfWheels
        this.maxSpeed = maxSpeed
    }
    move() {
        console.log(`${this.name} lifting anchor up`)
        super.move()
    }
    stop() {
        super.stop()
        console.log(`${this.name} lifting anchor down`)
    }
}