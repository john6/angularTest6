import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-staff-type-table-row',
  templateUrl: './staff-type-table-row.component.html',
  styleUrls: ['./staff-type-table-row.component.css']
})
export class StaffTypeTableRowComponent implements OnInit {

  @Input() staffType: any;
  @Input() columns: string[];

  constructor() { }
  ngOnInit() {
  }

}
