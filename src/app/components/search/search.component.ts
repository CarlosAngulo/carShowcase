import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CarsService } from '../../services/cars.service';
import { Car } from '../../shared/model/car';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private term: string;
  private cars:Car[];
  private carsLength:number;

  constructor(  private _carService:CarsService, 
                private _activatedRoute:ActivatedRoute,
                private _router:Router
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.term = params['term'].toString();
      this._carService.getCarsByBrand(this.term).subscribe(data => {
        this.cars = data
        this.carsLength = data.length;
      });

    });
  }

  showDetail(index:number) {
    this._router.navigate(['/detail', index]);
  }

}
