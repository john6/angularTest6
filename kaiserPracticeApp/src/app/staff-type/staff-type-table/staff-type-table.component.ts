import { Component, OnInit, OnDestroy } from '@angular/core';
import { StaffTypeService } from '../../staff-type.service';
import { Observable } from 'rxjs';
import { StaffType } from "../../models/staff-type.model";
import 'rxjs/Rx';
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-staff-type-table',
  templateUrl: './staff-type-table.component.html',
  styleUrls: ['./staff-type-table.component.css'],
  providers: [StaffTypeService]
})
export class StaffTypeTableComponent implements OnInit, OnDestroy {
  staffTypes: StaffType[];
  columns: string[];
  numberSubscription: Subscription;
  practiceSubscription: Subscription;

  constructor(private staffTypeService: StaffTypeService) {}

  ngOnInit() {
    this.columns = this.staffTypeService.getColumns();
    this.staffTypes = this.staffTypeService.getStaffTypes();
    const observableNumbers = Observable.interval(1000);
    this.numberSubscription = observableNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const practiceObservable = Observable.create((observer: Observer) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        observer.error('this does not work');
      }, 5000);
    });
    this.practiceSubscription = practiceObservable.subscribe(
      (data: string) => {
        console.log(data)
      },
      (error: string) => {
        console.log(error)
      },
      () => {
        console.log('completed')
      }
    );
  }

  ngOnDestroy() {
    this.numberSubscription.unsubscribe();
    this.practiceSubscription.unsubscribe();
  }

  whenClicked() {
    this.staffTypeService.printToConsole();
  }




}
