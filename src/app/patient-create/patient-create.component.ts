import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrl: './patient-create.component.css'
})
export class PatientCreateComponent {
  
  postPatientForm!: FormGroup;
  doctorNames: string[] = [];

  constructor(private patientService: PatientService, private fb: FormBuilder,
    private router: Router, private doctorService: DoctorService) { }

  ngOnInit() {
    this.postPatientForm = this.fb.group({
      name: [null, [Validators.required]],
      dob: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      contactNumber: [null, [Validators.required]],
      doctorId: [null, [Validators.required]]
    });

   
    
  }

  reformatFormData(formData: any): any {
    const { name, dob, gender, contactNumber, doctorId } = formData;
  
  
    return {
      doctor: { doctorId },
      name,
      dob,
      gender,
      contactNumber
    };
  }
  

  calculateAge() {
    const dobValue = this.postPatientForm.get('dob')?.value;
    if (dobValue) {
      const today = new Date();
      const birthDate = new Date(dobValue);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      this.postPatientForm.patchValue({ age: age });
    }
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
