import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STAFFTYPEDATA } from './staff-type-data';
import { StaffType } from "./models/staff-type.model";
import { of } from 'rxjs'
//import { delay } from 'rxjs'
import 'rxjs/add/operator/delay';

@Injectable()
export class StaffTypeService {

  constructor() { }
/*
  getStaffTypes(): Observable<any[]>{
    return of(STAFFTYPEDATA).delay(100);
  }

  getColumns(): string[]{
    return ["Description", "Code", "Role", "Active", "Last_Modified_By", "Last_Modified_Date_Time"]};


  getStaffTypeColumns(): string {
    return " "
  }
      )
  ]
*/
  private staffTypeList: StaffType[] = [
    new StaffType(
      'This is a code',
      'This is a description',
      'This is a role',
      'This is active',
      'This is last modified by',
      'This is last modified date time'),
    new StaffType(
      'This is a code also',
      'This is a description  also',
      'This is a role also',
      'This is active also',
      'This is last modified by also',
      'This is last modified date time also')
    ];

  addStaffType(staffType: StaffType) {
    this.staffTypeList.push(staffType);
  }

  getStaffTypes(): StaffType[]{
    return this.staffTypeList;
  }

  getColumns(): string[]{
    return ["Code", "Description", "Role", "Active", "Last_Modified_By", "Last_Modified_Date_Time"]};

}

