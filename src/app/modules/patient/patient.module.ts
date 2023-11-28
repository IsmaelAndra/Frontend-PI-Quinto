import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { PatientRoutingModule } from './patient-routing.module';



@NgModule({
  declarations: [
    PatientHomeComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
