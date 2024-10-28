interface IVehicle {
    model: string;
    color: string,
    year: number;
    
}

interface ICar extends IVehicle{
    model: string;
    color: string;
    year: number;
    wheels: number;
}

interface IMotorcycle extends IVehicle{
    model: string;
    color: string;
    year: number;
    wheels: number;
}

class Vehicle implements ICar, IMotorcycle, IVehicle {
    model: string;
    color: string;
    year: number;
    wheels: number;

    constructor( model:string, color: string, year:number, wheels: number){
        this.model= model;
        this.color= color;
        this.year= year;
        this.wheels=wheels;
    }
}

