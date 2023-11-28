import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentHomeComponent } from './appointment-home/appointment-home.component';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';

@NgModule({
  declarations: [
    AppointmentHomeComponent,
    ScheduleAppointmentComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule
  ]
})
export class AppointmentModule { }
