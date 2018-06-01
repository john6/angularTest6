import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CHARACTERS } from './staff-type-data';
import { of } from 'rxjs'
//import { delay } from 'rxjs'
import 'rxjs/add/operator/delay';

@Injectable({
  providedIn: 'root'
})
export class StaffTypeService {

  constructor() { }

  getCharacters(): Observable<any[]>{
    return of(CHARACTERS).delay(100);
  }
  getColumns(): string[]{
    return ["name", "age", "species", "occupation"]};
}

