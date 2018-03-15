import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyDatePickerModule } from '../../node_modules/angular4-datepicker/src/my-date-picker/index';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BookerComponent } from './booker/booker.component';


@NgModule({
  declarations: [
    AppComponent,
    BookerComponent
  ],
  imports: [
    BrowserModule,
    MyDatePickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
