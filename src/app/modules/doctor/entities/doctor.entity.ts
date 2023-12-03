export interface DoctorModel {
    id_doctor: Number | null;
    startime_doctor: String;
    departime_doctor: String;
    speciality: String;
    user: number;
}

export interface CreateDoctorDto extends Omit<DoctorModel, 'id_doctor'>{
    id_speciality: number;
    id_user: number;
}

export interface UpdateDoctorDto extends Partial<DoctorModel>{
    id_speciality: number;
    id_user: number;
}