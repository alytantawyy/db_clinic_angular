import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { MedicineComponent } from './medicine/medicine.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DoctorCreateComponent } from './doctor-create/doctor-create.component';
import { DoctorUpdateComponent } from './doctor-update/doctor-update.component';
import { AppointmentCreateComponent } from './appointment-create/appointment-create.component';
import { AppointmentUpdateComponent } from './appointment-update/appointment-update.component';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import { PatientUpdateComponent } from './patient-update/patient-update.component';
import { MedicineCreateComponent } from './medicine-create/medicine-create.component';
import { MedicineUpdateComponent } from './medicine-update/medicine-update.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DoctorComponent,
    PatientComponent,
    MedicineComponent,
    AppointmentComponent,
    NavbarComponent,
    DoctorCreateComponent,
    DoctorUpdateComponent,
    AppointmentCreateComponent,
    AppointmentUpdateComponent,
    PatientCreateComponent,
    PatientUpdateComponent,
    MedicineCreateComponent,
    MedicineUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
