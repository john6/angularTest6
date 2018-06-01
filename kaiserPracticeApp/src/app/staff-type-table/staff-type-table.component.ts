import { Component, OnInit } from '@angular/core';
import { StaffTypeService } from '../staff-type.service';
import { Observable } from 'rxjs';
import { StaffTypeTableRowComponent } from '../staff-type-table-row/staff-type-table-row.component';


@Component({
  selector: 'app-staff-type-table',
  templateUrl: './staff-type-table.component.html',
  styleUrls: ['./staff-type-table.component.css']
})
export class StaffTypeTableComponent implements OnInit {

  characters: Observable<any[]>;
  columns: string[];

  constructor(private atService: StaffTypeService) {}

  ngOnInit() {
    this.columns = this.atService.getColumns();
    //["name", "age", "species", "occupation"]
    this.characters = this.atService.getCharacters();
    //all data in mock-data.ts
  }

}
