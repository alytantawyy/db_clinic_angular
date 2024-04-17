import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent{

  constructor(private doctorService: DoctorService) { }

  doctors: any=[];

  ngOnInit(){
    this.getAllDoctors();
  }

  getAllDoctors(){
    this.doctorService.getAllDoctor().subscribe((res) => {
      console.log(res);
      this.doctors = res;
    })
  }

  deleteDoctor(id: number){
    this.doctorService.deleteDoctor(id).subscribe((res)=>{
      console.log(res);
      this.getAllDoctors();
    })
  }
}
