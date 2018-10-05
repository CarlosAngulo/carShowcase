import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from '../../../services/cars.service';
import { CompareService } from '../../../services/compare.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() stick:boolean;
  private disableCompare = true

  constructor(  private _carService:CarsService, 
                private _router:Router,
                private _compare:CompareService ) { }

  ngOnInit() {
    this._compare.canCompare.subscribe( value => this.disableCompare = value);
  }

  searchByBrand(term:string) {
    this._router.navigate(['/search', term]);
  }

  compare() {
    console.log('copare')
    this._router.navigate(['/compare']);
  }

}
