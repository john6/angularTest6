import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STAFFTYPEDATA } from './staff-type-data';
import { of } from 'rxjs'
//import { delay } from 'rxjs'
import 'rxjs/add/operator/delay';

@Injectable({
  providedIn: 'root'
})
export class StaffTypeService {

  constructor() { }

  getStaffTypes(): Observable<any[]>{
    return of(STAFFTYPEDATA).delay(100);
  }
  getColumns(): string[]{
    return ["Description", "Code", "Role", "Active", "Last_Modified_By", "Last_Modified_Date_Time"]};
}

