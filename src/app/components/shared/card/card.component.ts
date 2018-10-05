import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../../../shared/model/car';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() info:Car;

  constructor( private _router:Router ) { }

  ngOnInit() {
    
  }
  
  showDetail(index:number) {
    this._router.navigate(['/detail', index]);
  }

}
