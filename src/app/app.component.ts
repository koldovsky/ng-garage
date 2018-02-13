import { Component } from '@angular/core';

import { CarListService } from './car-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currCar;
  cars;
  constructor(private carList: CarListService ) {
    this.cars = carList.carList;
  }
}
