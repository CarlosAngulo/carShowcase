import { Injectable } from '@angular/core';
import { Car } from '../shared/model/car';
import { Observable} from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Injectable()
export class CarsService {

  private apiURL = '../assets/data.json';
  private cars: Car[];
  private filteredCars: Car[];

  constructor(private http: HttpClient) {
  }

  getCarsDB(): Observable<Car[]> {
    return this.http
      .get<Car[]>(this.apiURL)
  }

  getCarById(idx:number): Observable<Car> {
    return this.http
      .get<Car>(this.apiURL)
      .take(1)
      .map(x => x)
  }

  getCars():Car[] {
    return this.cars;
  }

  setCars(listOfCars:Car[]) {
    this.cars = listOfCars;
  }

  getCarsByBrand(term:string) {
    let carsArr: Car[] = [];
    term = term.toLocaleLowerCase();
    if(this.cars){
      for(let car of this.cars) {
        let brand = car.brand.toLowerCase();
        if(brand.includes(term)){
          carsArr.push(car);
        }
      }
    } else {

    }
    return carsArr;
  }

}