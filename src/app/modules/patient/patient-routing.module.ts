import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PatientHomeComponent } from './patient-home/patient-home.component';


const routes: Routes = [
  {
    path: '',
    children:
      [
        { path: '', pathMatch: 'full', redirectTo: 'patient' },
        { path: 'patient-home', component: PatientHomeComponent },
      ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
