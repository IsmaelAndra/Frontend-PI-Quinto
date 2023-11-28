import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentHomeComponent } from './appointment-home/appointment-home.component';
import { AppointmentRoutingModule } from './appointment-routing.module';

@NgModule({
  declarations: [
    AppointmentHomeComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule
  ]
})
export class AppointmentModule { }
