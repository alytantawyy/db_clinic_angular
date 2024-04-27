import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = ["http://localhost:8080"]

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  postPatient(patient: any): Observable<any>{
    return this.http.post(BASIC_URL + "/api/patients", patient);
  }

  getAllPatients(): Observable<any>{
    return this.http.get(BASIC_URL + "/api/patients");
  }

  deletePatient(id: number): Observable<any>{
    return this.http.delete(BASIC_URL + "/api/patients/" + id);
  }

  getPatientById(id: number): Observable<any>{
    return this.http.get(BASIC_URL + "/api/patients/" + id);
  }

  updatePatient(id: number, patient: any): Observable<any>{
    return this.http.put(BASIC_URL + "/api/patients/" + id, patient);
  }

  
}
