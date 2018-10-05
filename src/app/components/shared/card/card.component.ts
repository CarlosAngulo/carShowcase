import { Component, OnInit, Input } from '@angular/core';
import { CompareService } from '../../../services/compare.service';
import { Router } from '@angular/router';
import { Car } from '../../../shared/model/car';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() info:Car;
  private disabled = false;
  private checked = false;

  constructor( private _router:Router, private _compare:CompareService ) { }

  ngOnInit() {
    this._compare.allowMoreCars.subscribe( value => {
      if(!this.checked) {
        this.disabled = value;
      }
    });
  }
  
  showDetail(index:number) {
    this._router.navigate(['/detail', index]);
  }

  addCarToCompare(car:Car, checkCar:any) {
    if (checkCar.checked) {
      this.checked = true;
      this._compare.addCar(car);
    } else {
      this.checked = false;
      this._compare.removeCar(car.id);
    }
  }

  searchByBrand(term:string) {
    this._router.navigate(['/search', term]);
  }

}
