import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from './car';


@Injectable()
export class CarListService {

  constructor(private http: HttpClient) { }

  get carList() {
    return this.http.get<Car[]>('assets/car-list.json');
  }

}
