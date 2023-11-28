import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { DoctorRoutingModule } from './modules/doctor/doctor-routing.module';
import { PatientRoutingModule } from './modules/patient/patient-routing.module';
import { NotFoundRoutingModule } from './modules/not-found/notfound-routing.module';
import { AppointmentRoutingModule } from './modules/appointment/appointment-routing.module';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'doctor', loadChildren: () => import('./modules/doctor/doctor.module').then(m => m.DoctorModule) },
  { path: 'patient', loadChildren: () => import('./modules/patient/patient.module').then(m => m.PatientModule) },
  { path: 'appointment', loadChildren: () => import('./modules/appointment/appointment.module').then(m => m.AppointmentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule, HomeRoutingModule, DoctorRoutingModule, PatientRoutingModule, NotFoundRoutingModule, AppointmentRoutingModule],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
