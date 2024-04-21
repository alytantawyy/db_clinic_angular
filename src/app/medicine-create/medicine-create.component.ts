import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MedService } from '../medicine.service';

@Component({
  selector: 'app-medicine-create',
  templateUrl: './medicine-create.component.html',
  styleUrls: ['./medicine-create.component.css'] // Fix typo here
})
export class MedicineCreateComponent {

  postMedForm!: FormGroup;

  constructor(private medService: MedService, private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.postMedForm = this.fb.group({
      name: [null, [Validators.required]],
      manufacturer: [null, [Validators.required]],
      price: [null, [Validators.required]],
      quantity: [null, [Validators.required]]
    });
  }

  postMed() {
    console.log(this.postMedForm.value);
    this.medService.postMed(this.postMedForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl("/medicines");
    });
  }
}
