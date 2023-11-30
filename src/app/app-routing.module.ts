import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';
import { DoctorRoutingModule } from './modules/doctor/doctor-routing.module';
import { PatientRoutingModule } from './modules/patient/patient-routing.module';
import { AppointmentRoutingModule } from './modules/appointment/appointment-routing.module';
import { NotFoundRoutingModule } from './modules/not-found/notfound-routing.module';
import { AuthModule } from './modules/auth/auth.module';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'doctor', loadChildren: () => import('./modules/doctor/doctor.module').then(m => m.DoctorModule) },
  { path: 'patient', loadChildren: () => import('./modules/patient/patient.module').then(m => m.PatientModule) },
  { path: 'appointment', loadChildren: () => import('./modules/appointment/appointment.module').then(m => m.AppointmentModule) },
  { path: '**', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule,
    HomeRoutingModule,
    DoctorRoutingModule,
    PatientRoutingModule,
    AppointmentRoutingModule,
    NotFoundRoutingModule
  ],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
