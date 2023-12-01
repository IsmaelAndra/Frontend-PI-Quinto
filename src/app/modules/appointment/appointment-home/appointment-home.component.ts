import { Component, OnInit } from '@angular/core';
import { ConsultoryModel } from '../entities/consultory.entity';
import { PacientModel } from '../entities/pacient.entity';
import { DoctorModel } from '../entities/doctor.entity';
import { ScheduleModel } from '../entities/schedule.entity';
import { SpecialityModel } from '../entities/speciality.entity';
import { SpecialityService } from '../services/speciality.service';
import { ScheduleService } from '../services/schedule.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AppointmentModel } from '../entities/appointment.entity';
import { AppointmentService } from '../services/appointment.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ConsultoryService } from '../services/consultory.service';
import { DoctorService } from '../services/doctor.service';
import { UserModel } from '../entities/user.entity';
import { PacientService } from '../services/pacient.service';

@Component({
  selector: 'app-appointment-home',
  templateUrl: './appointment-home.component.html',
  styleUrls: ['./appointment-home.component.css']
})
export class AppointmentHomeComponent implements OnInit {
  consultories: ConsultoryModel[] = [];
  pacients: PacientModel[] = [];
  doctors: DoctorModel[] = [];
  schedules: ScheduleModel[] = [];
  specialities: SpecialityModel[] = [];
  user: UserModel[] = [];

  constructor(private specilityService: SpecialityService, private scheduleService: ScheduleService, private appointmentService: AppointmentService, private consultoryService: ConsultoryService, private router: Router, private doctorService: DoctorService, private pacientService: PacientService) { }

  ngOnInit(): void {
    this.specilityService.getAll().subscribe(data => {
      this.specialities = data;
    })

    this.scheduleService.getAll().subscribe(data => {
      this.schedules = data;
    })

    this.consultoryService.getAll().subscribe(data => {
      this.consultories = data;
    })

    this.doctorService.getAll().subscribe(data => {
      this.doctors = data;
    })

    this.pacientService.getAll().subscribe(data => {
      this.pacients = data;
    })
  }

  appointments: AppointmentModel = {
    date_medical: new Date(),
    speciality_medical: '',
    status_medical: 'activo',
    reason_medical: '',
    schedule: 0,
    consultory: 0,
    pacient: 0,
    doctor: 0
  }

  newAppointment = new FormGroup({
    date_medical: new FormControl(new Date()),
    speciality_medical: new FormControl(''),
    status_medical: new FormControl('activo'),
    reason_medical: new FormControl(''),
    schedule: new FormControl(0),
    consultory: new FormControl(0),
    pacient: new FormControl(0),
    doctor: new FormControl(0)
  })

  submit(data: any) {
    if (this.appointments) {
      data.id_medical = this.appointments.id_medical;
    }
    this.appointmentService.store(data).subscribe((result) => {
      if (result) {
        Swal.fire({
          icon: 'success',
          title: 'Agendado con Exito',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    setTimeout(() => {
      this.router.navigate(['/appointment-pay'])
    }, 1700);
    console.log(data);
  }
}
