import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { PatientRoutingModule } from './patient-routing.module';
import { SharedModule } from "../../shared/shared.module";



@NgModule({
    declarations: [
        PatientHomeComponent
    ],
    imports: [
        CommonModule,
        PatientRoutingModule,
        SharedModule
    ]
})
export class PatientModule { }
