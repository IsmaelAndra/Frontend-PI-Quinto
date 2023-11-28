import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PatientHomeComponent } from './patient-home/patient-home.component';


const routes: Routes = [
  {
    path: '',
    children:
      [
        {path: 'patient-home', component:PatientHomeComponent},
        { path: '', pathMatch: 'full', redirectTo: 'patient' },
      ]
  }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PatientRoutingModule { }
