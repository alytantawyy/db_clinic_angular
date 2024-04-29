import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs';

const BASIC_URL = ["http://localhost:8080"]

@Injectable({
  providedIn: 'root'
})

export class DoctorService {

  constructor(private http: HttpClient) { }

  postDoctor(doctor: any): Observable<any>{
    return this.http.post(BASIC_URL + "/api/doctors", doctor);
  }

  getAllDoctor(): Observable<any>{
    return this.http.get(BASIC_URL + "/api/doctors");
  }

  deleteDoctor(id: number): Observable<any>{
    return this.http.delete(BASIC_URL + "/api/doctors/" + id);
  }

  getDoctorById(id: number): Observable<any>{
    return this.http.get(BASIC_URL + "/api/doctors/" + id);
  }

  updateDoctor(id: number, doctor: any): Observable<any>{
    return this.http.put(BASIC_URL + "/api/doctors/" + id, doctor);
  }

  getDoctorNamesById(doctorId: string): Observable<string[]> {
    return this.http.get<string[]>(`/api/doctors/${doctorId}/names`);
  }

  
}
