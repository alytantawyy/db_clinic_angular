import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent {

  postAppointmentForm!: FormGroup;
  isAppointmentUnavailable: boolean = false; // Define the property here

  constructor(private appointmentService: AppointmentService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.postAppointmentForm = this.fb.group({
      date: [null, [Validators.required]],
      time: [null, [Validators.required]],
      doctorId: [null, [Validators.required]],
      patientId: [null, [Validators.required]],
      notes: ['']
    });
  }

  reformatFormData(formData: any): any {
    const { date, time, doctorId, patientId, notes } = formData;
  
    // Split the date into components (month, day, year)
    const [month, day, year] = date.split('/');
  
    // Reformat the date to yyyy/mm/dd format
    const formattedDate = `${year}-${month}-${day}`;
  
    return {
      doctor: { doctorId },
      patient: { patientId },
      dateTime: `${formattedDate}T${time}:00`,
      notes
    };
  }

  

  postAppointment() {
    // Reformat the form data
    const formattedData = this.reformatFormData(this.postAppointmentForm.value);

   

    // Submit the appointment if available
    this.appointmentService.postAppointment(formattedData).subscribe((res) => {
      console.log(res); // Log the response
      this.router.navigateByUrl("/appointments");
    });
  }
}
