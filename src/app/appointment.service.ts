import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = ["http://localhost:8080"]

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  postAppointment(appointment: any): Observable<any>{
    return this.http.post(BASIC_URL + "/api/appointments", appointment);
  }

  getAllAppointments(): Observable<any>{
    return this.http.get(BASIC_URL + "/api/appointments");
  }

  deleteAppointment(id: number): Observable<any>{
    return this.http.delete(BASIC_URL + "/api/appointments/" + id);
  }

  getAppointmentById(id: number): Observable<any>{
    return this.http.get(BASIC_URL + "/api/appointments/" + id);
  }

  updateAppointment(id: number, appointment: any): Observable<any>{
    return this.http.put(BASIC_URL + "/api/appointments/" + id, appointment);
  }
}
