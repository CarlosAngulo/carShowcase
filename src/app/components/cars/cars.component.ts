import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor( private _cars:CarsService, private _router:Router ) { }

  ngOnInit() {
    const results = this._cars.getCarsDB();
    const firstCar = results.pipe(first());
    firstCar.subscribe(data => {
      this._cars.setCars(data);
      this.cars = data
      .map(item =>
        {
          return new Car(
            item.id,
            item.brand,
            item.name,
            item.model,
            item.year,
            item.price,
            item.thumb,
            item.description
          );
        });
      })
  }
  
  showDetail(index:number) {
    this._router.navigate(['/detail', index]);
  }
  
}
