import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-update',
  templateUrl: './appointment-update.component.html',
  styleUrl: './appointment-update.component.css'
})
export class AppointmentUpdateComponent {

  updatedAppointmentForm!: FormGroup;

  id: number = this.activatedRoute.snapshot.params["id"];

  constructor(private activatedRoute: ActivatedRoute, 
    private appointmentService: AppointmentService, private fb: FormBuilder, 
    private router: Router){ }

  ngOnInit(){
    this.updatedAppointmentForm = this.fb.group({
      date: [null, [Validators.required]],
      time: [null, [Validators.required]],
      doctorId: [null, [Validators.required]],
      patientId: [null, [Validators.required]],
      notes: ['']
    });
    this.getAppointmentById();
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

  getAppointmentById(){
    this.appointmentService.getAppointmentById(this.id).subscribe((res)=>{
      console.log(res);
  
      // Extract necessary values from the response object
      const { dateTime, notes, doctor, patient } = res;
  
      // Extract date and time from the dateTime string
      const [datePart, timePart] = dateTime.split('T');
  
      // Format the date as "mm/dd/yyyy"
      const [year, month, day] = datePart.split('-');
      const formattedDate = `${month}/${day}/${year}`;
  
      // Patch the values into the form controls
      this.updatedAppointmentForm.patchValue({
        date: formattedDate,
        time: timePart.substr(0, 5), // Extract only the time portion
        doctorId: doctor.doctorId,
        patientId: patient.patientId,
        notes: notes
      });
    });
  }
  
  

  updateAppointment() {

    const formattedData = this.reformatFormData(this.updatedAppointmentForm.value);
    this.appointmentService.updateAppointment(this.id, formattedData).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl("/appointments");
    });
  }

}
