import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentHomeComponent } from './appointment-home/appointment-home.component';

const routes: Routes = [
      {
        path: '',
        children:
          [
            {path: 'appointment', pathMatch: 'full', redirectTo: 'appointment-home'},
            { path: 'appointment-home', component: AppointmentHomeComponent },
          ]
      }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
