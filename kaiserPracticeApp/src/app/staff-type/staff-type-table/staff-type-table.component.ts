import { Component, OnInit } from '@angular/core';
import { StaffTypeService } from '../../staff-type.service';
import { Observable } from 'rxjs';
import { StaffType } from "../../models/staff-type.model";

@Component({
  selector: 'app-staff-type-table',
  templateUrl: './staff-type-table.component.html',
  styleUrls: ['./staff-type-table.component.css'],
  providers: [StaffTypeService]
})
export class StaffTypeTableComponent implements OnInit {

  staffTypes: StaffType[];
  columns: string[];

  constructor(private atService: StaffTypeService) {}

  ngOnInit() {
    this.columns = this.atService.getColumns();
    this.staffTypes = this.atService.getStaffTypes();
  }

}
