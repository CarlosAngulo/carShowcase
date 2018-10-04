import { Injectable } from '@angular/core';
import { Car } from '../shared/model/car';
import { Observable} from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class CarsService {

  private apiURL = '../assets/data.json';
  private cars: Car[];
  private selectedCar: Car[];

  constructor(private http: HttpClient) {
  }

  getCars(): Observable<Car[]> {
    return this.http
      .get<Car[]>(this.apiURL);
  }

  getCar(idx:number): Observable<Car> {
    return this.http
      .get<Car>(this.apiURL)
      .take(1)
      .map(x => x)
  }

}