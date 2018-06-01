import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTypeTableRowComponent } from './staff-type-table-row.component';

describe('StaffTypeTableRowComponent', () => {
  let component: StaffTypeTableRowComponent;
  let fixture: ComponentFixture<StaffTypeTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffTypeTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffTypeTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
