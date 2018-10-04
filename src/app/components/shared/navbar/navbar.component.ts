import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from '../../../services/cars.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private _carService:CarsService, private _router:Router) { }

  ngOnInit() {
  }

  searchByBrand(term:string) {
    this._router.navigate(['/search', term]);
  }
}
