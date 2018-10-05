import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { CompareService } from '../../services/compare.service';
import { Car } from '../../shared/model/car';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  public cars: Car[];

  constructor( private _cars:CarsService, private _compare:CompareService ) {
    this._compare.removeAllCars();
  }

  ngOnInit() {
    this._cars.getAll().subscribe(data => {
      this.cars = data
    });
  }
  
}
