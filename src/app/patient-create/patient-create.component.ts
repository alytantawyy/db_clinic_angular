import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrl: './patient-create.component.css'
})
export class PatientCreateComponent {
  
  postPatientForm!: FormGroup;

  constructor(private patientService: PatientService, private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.postPatientForm = this.fb.group({
      name: [null, [Validators.required]],
      age: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      contactNumber: [null, [Validators.required]],
      doctorId: [null, [Validators.required]]
    });
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

  postPatient() {
    const formattedData = this.reformatFormData(this.postPatientForm.value);

    console.log(formattedData);
  
    this.patientService.postPatient(formattedData).subscribe((res) => {
      console.log(res); // Log the response
      this.router.navigateByUrl("/patients");
    });

  }

}
