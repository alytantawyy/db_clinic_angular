import { Component } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {

  constructor(private patientService: PatientService) { }

  patients: any=[];

  ngOnInit(){
    this.getAllPatients();
  }

  getAllPatients(){
    this.patientService.getAllPatients().subscribe((res) => {
      console.log(res);
      this.patients = res;
    })
  }

  deletePatient(id: number){
    this.patientService.deletePatient(id).subscribe((res)=>{
      console.log(res);
      this.getAllPatients();
    })
  }

}
