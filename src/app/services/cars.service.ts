import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../shared/model/car';
import { Observable} from 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable()
export class CarsService {

  private apiURL = '../assets/data.json';
  private cars: Car[];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiURL).pipe(
      map(cars => {
        return this.mapAnswer(cars)
      })
    );
  }

  getCarById(idx:number): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiURL).pipe(
      map(cars => {
        return this.mapAnswer(cars, true).filter(item => {
          return item.id == idx;
        });
      })
    );
  }
  
  getCarsByBrand(term:string): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiURL).pipe(
      map(cars => {
        return this.mapAnswer(cars)
        .filter(item => item.brand.toLowerCase() === term.toLowerCase());
      })
    );
  }
  
  mapAnswer(cars:Car[], complete:boolean = false){
    return cars.map(car => {
      let newCar:Car = new Car(
        car.id,
        car.brand,
        car.name,
        car.model,
        car.year,
        car.price,
        car.thumb,
        car.description
      );
      if(complete) {
        newCar.gallery = car.gallery;
        newCar.phone = car.phone;
      }
      return newCar;
    })
  }
}