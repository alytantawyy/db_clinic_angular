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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'doctors', component: DoctorComponent},
  { path: 'patients', component: PatientComponent },
  { path: 'medicines', component: MedicineComponent },
  { path: 'appointments', component: AppointmentComponent },
  { path: 'doctors/create', component: DoctorCreateComponent },
  { path: 'doctors/:id', component: DoctorUpdateComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
