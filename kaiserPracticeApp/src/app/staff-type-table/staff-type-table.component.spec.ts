import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffTypeTableComponent } from './staff-type-table.component';

describe('StaffTypeTableComponent', () => {
  let component: StaffTypeTableComponent;
  let fixture: ComponentFixture<StaffTypeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffTypeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffTypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
