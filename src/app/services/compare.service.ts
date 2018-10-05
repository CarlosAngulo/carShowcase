import { Injectable, EventEmitter } from '@angular/core';
import { CarsService } from './cars.service';
import { Car } from '../shared/model/car';

@Injectable()
export class CompareService {
    
    private carsToCompare: Car[] = [];
    public allowMoreCars: EventEmitter<boolean> = new EventEmitter();
    public canCompare: EventEmitter<boolean> = new EventEmitter();

    constructor( private _carsService:CarsService ) {
    }

    addCar(car:Car) {
        if(this.carsToCompare.length < 3) {
            this._carsService.getCarById(car.id).subscribe(data => {
                this.carsToCompare.push(data[0])
                this.checkComparision();
            });
        }
    }

    removeCar(idx:number) {
        for(let i:number = 0; i<this.carsToCompare.length; i++){
            if(this.carsToCompare[i].id == idx) {
                this.carsToCompare.splice(i, 1);
            }
        }
        this.checkComparision();
    }

    removeAllCars() {
        this.carsToCompare = [];
        this.checkComparision();
    }

    checkComparision() {
        this.carsToCompare.length < 3 ? this.allowMoreCars.next(false):this.allowMoreCars.next(true);
        this.carsToCompare.length > 1 ? this.canCompare.next(false):this.canCompare.next(true);
    }

    get cars():Car[] {
        return this.carsToCompare;
    }

}
