export interface AppointmentModel {
    id_medical?: number | null;
    date_medical: Date;
    speciality_medical: String;
    status_medical: String;
    reason_medical: String;
    schedule: number;
    consultory: number;
    pacient: number;
    doctor: number;
}

export interface CreateAppointmentDto extends Omit<AppointmentModel, 'id_medical'>{
    id_schedule?: number;
    id_consultory?: number;
    id_patient?: number;
    id_doctor?: number;
}

export interface UpdateAppointmentDto extends Partial<AppointmentModel>{
    id_schedule?: number;
    id_consultory?: number;
    id_patient?: number;
    id_doctor?: number;
}