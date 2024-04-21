import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-update',
  templateUrl: './doctor-update.component.html',
  styleUrl: './doctor-update.component.css'
})
export class DoctorUpdateComponent {

  updatedDoctorForm!: FormGroup;

  id: number = this.activatedRoute.snapshot.params["id"];

  constructor(private activatedRoute: ActivatedRoute, 
    private doctorService: DoctorService, private fb: FormBuilder, 
    private router: Router){ }

  ngOnInit(){
    this.updatedDoctorForm = this.fb.group({
      name: [null, [Validators.required]],
      specialization: [null, [Validators.required]],
      contactNumber: [null, [Validators.required]],
      hourlyPay: [null, [Validators.required]]
    });
    this.getDoctorById();
  }

  getDoctorById(){
    this.doctorService.getDoctorById(this.id).subscribe((res)=>{
      console.log(res);
      this.updatedDoctorForm.patchValue(res);
    })
  }

  updateDoctor() {
    const formData = this.updatedDoctorForm.value; // Get the form data as an object
    this.doctorService.updateDoctor(this.id, formData).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl("/doctors");
    });
  }
  

}
