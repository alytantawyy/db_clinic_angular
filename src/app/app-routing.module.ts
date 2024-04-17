// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { MedicineComponent } from './medicine/medicine.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorCreateComponent } from './doctor-create/doctor-create.component';
import { DoctorUpdateComponent } from './doctor-update/doctor-update.component';
import { AppointmentCreateComponent } from './appointment-create/appointment-create.component';
import { AppointmentUpdateComponent } from './appointment-update/appointment-update.component';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'doctors', component: DoctorComponent},
  { path: 'patients', component: PatientComponent },
  { path: 'patients/create', component: PatientCreateComponent},
  { path: 'patients/:id', component: PatientUpdateComponent },
  { path: 'medicines', component: MedicineComponent },
  { path: 'appointments', component: AppointmentComponent },
  { path: 'appointments/create', component: AppointmentCreateComponent},
  { path: 'doctors/create', component: DoctorCreateComponent },
  { path: 'doctors/:id', component: DoctorUpdateComponent },
  { path: 'appointments/:id', component: AppointmentUpdateComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
