import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedService } from '../medicine.service';

@Component({
  selector: 'app-medicine-update',
  templateUrl: './medicine-update.component.html',
  styleUrl: './medicine-update.component.css'
})
export class MedicineUpdateComponent {

  updatedMedicineForm!: FormGroup;

  id: number = this.activatedRoute.snapshot.params["id"];

  constructor(private activatedRoute: ActivatedRoute, 
    private medicineService: MedService, private fb: FormBuilder, 
    private router: Router){ }

  ngOnInit(){
    this.updatedMedicineForm = this.fb.group({
      name: [null, [Validators.required]],
      manufacturer: [null, [Validators.required]],
      price: [null, [Validators.required]],
      quantity: [null, [Validators.required]]
    });
    this.getMedById();
  }

  getMedById(){
    this.medicineService.getMedById(this.id).subscribe((res)=>{
      console.log(res);
      this.updatedMedicineForm.patchValue(res);
    })
  }

  updateMed() {
    const formData = this.updatedMedicineForm.value; // Get the form data as an object
    this.medicineService.updateMed(this.id, formData).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl("/medicines");
    });
  }
  

}
