import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorComponent } from '../doctor/doctor.component';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrl: './patient-update.component.css'
})
export class PatientUpdateComponent {

  id: number = this.activatedRoute.snapshot.params["id"];

  updatedPatientForm!: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private patientService: PatientService, private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.updatedPatientForm = this.fb.group({
      name: [null, [Validators.required]],
      age: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      contactNumber: [null, [Validators.required]],
      doctorId: [null, [Validators.required]]
    });
    this.getPatientById();
  }



  reformatFormData(formData: any): any {
    const { name, age, gender, contactNumber, doctorId } = formData;
  
  
    return {
      doctor: { doctorId },
      name,
      age,
      gender,
      contactNumber
    };
  }

  getPatientById(){
    this.patientService.getPatientById(this.id).subscribe((res)=>{
      console.log(res);

      const { name, age, gender, contactNumber, doctor } = res;

      this.updatedPatientForm.patchValue({
        doctorId: doctor.doctorId,
        name,
        age,
        gender,
        contactNumber
      });
    });
  }

  updatePatient() {
    const formattedData = this.reformatFormData(this.updatedPatientForm.value);

    console.log(formattedData);
  
    this.patientService.updatePatient(this.id, formattedData).subscribe((res) => {
      console.log(res); // Log the response
      this.router.navigateByUrl("/patients");
    });

  }

}
