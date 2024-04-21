import { Component,OnInit } from '@angular/core';
import { MedService } from '../medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent {

  constructor(private medService: MedService) { }

  medicines: any=[];

  ngOnInit(){
    this.getAllMeds();
  }

  getAllMeds(){
    this.medService.getAllMed().subscribe((res) => {
      console.log(res);
      this.medicines = res;
    })
  }

  deleteMed(id: number){
    this.medService.deleteMed(id).subscribe((res)=>{
      console.log(res);
      this.getAllMeds();
    })
  }
}
