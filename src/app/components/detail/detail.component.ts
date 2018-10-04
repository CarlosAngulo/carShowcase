import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService} from '../../services/cars.service';
import { Car } from '../../shared/model/car';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  private carId:any;
  private car:Car[];
  
  constructor( private _activatedRoute:ActivatedRoute, private _cars:CarsService,) {
    this._activatedRoute.params.subscribe( params => {
      this.carId = params['id'].toString();
      this._cars.getCarsDB().subscribe(data => {
        this.car = data
        .filter(item => item.id == this.carId)
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
              item.description,
              item.phone
            );
          });
        });
    });
  }

  ngOnInit() {
  }

}
