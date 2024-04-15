import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private appointmentService: AppointmentService) { }

  appointments: any=[];

  ngOnInit(){
    this.getAllAppointments();
  }

  getAllAppointments(){
    this.appointmentService.getAllAppointments().subscribe((res) => {
      console.log(res);
      this.appointments = res;
    })
  }

  deleteAppointment(id: number){
    this.appointmentService.deleteAppointment(id).subscribe((res)=>{
      console.log(res);
      this.getAllAppointments();
    })
  }
}
