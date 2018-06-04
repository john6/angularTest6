import { Component, OnInit } from '@angular/core';
import { StaffTypeService } from '../../staff-type.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-staff-type-table',
  templateUrl: './staff-type-table.component.html',
  styleUrls: ['./staff-type-table.component.css']
})
export class StaffTypeTableComponent implements OnInit {

  staffTypes: Observable<any[]>;
  columns: string[];

  constructor(private atService: StaffTypeService) {}

  ngOnInit() {
    this.columns = this.atService.getColumns();
    this.staffTypes = this.atService.getStaffTypes();
  }

}
