import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarsService} from '../../services/cars.service';
import { Car } from '../../shared/model/car';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  public cars: Car[];

  constructor( private _cars:CarsService ) { }

  ngOnInit() {
    this._cars.getAll().subscribe(data => {
      this.cars = data
    });
  }
  
}
