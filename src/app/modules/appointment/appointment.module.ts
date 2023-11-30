import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentHomeComponent } from './appointment-home/appointment-home.component';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentPayComponent } from './appointment-pay/appointment-pay.component';
import { AppointmentFinishComponent } from './appointment-finish/appointment-finish.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AppointmentHomeComponent,
    AppointmentPayComponent,
    AppointmentFinishComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    SharedModule
  ]
})
export class AppointmentModule { }
