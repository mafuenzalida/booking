import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from '../../../node_modules/angular4-datepicker/src/my-date-picker/index';
import { IMyDateModel } from '../../../node_modules/angular4-datepicker/src/my-date-picker/index';
import { Building } from '../model/building.model';
import { Booking } from '../model/booking.model';
import { Department } from '../model/department.model';
import { Space } from '../model/space.model';

@Component({
  selector: 'app-booker',
  templateUrl: './booker.component.html',
  styleUrls: ['./booker.component.css']
})
export class BookerComponent implements OnInit {

  private model: any = { date: { year: 2018, month: 10, day: 9 } };
  private date: string = "";
  private building: Building = new Building(
    [new Department(1,"Martin"),
     new Department(2,"Tomas"),
     new Department(3,"Sebastian")],
    [new Space("Quincho"),
     new Space("Piscina")],
    "Alto Costanera"
  );
  private bookings: Booking[] = new Array<Booking>();
  private department: Department;
  private space: Space;

  constructor() { }

  ngOnInit() {
  }

  /* Formats calendar date from datepicker */
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
  };

  /* Callback data change on calendar from datepicker */
  onDateChanged(event: IMyDateModel) {
      // event properties are: event.date, event.jsdate, event.formatted and event.epoc
      this.date = event.formatted;
  }

  /* Callback to book a date */
  onClick(event: any) {

    //Check if the date is already booked
    let booked = false;
    let num = 0;
    for(let book of this.bookings) {
      if( book.date === this.date && book.space.name === this.space.name) {
        booked = true;
        num = book.department.number;
        break;
      }
    }

    if(booked) {
      //alert user
      window.alert("That date is already booked by department " + num);
    }
    else {
      //if not, book the date
      this.bookings.push(new Booking(this.department,this.space,this.date))
      window.alert("Booking succesfull");
    }
  }

}
