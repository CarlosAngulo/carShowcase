import { Component, OnInit } from '@angular/core';
import { CompareService } from '../../services/compare.service';
import { Car } from '../../shared/model/car';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  private cars:Car[];

  constructor(private _compare:CompareService) {
    this.cars = this._compare.cars;
    console.log(this.cars);
    
  }

  ngOnInit() {
  }

}
