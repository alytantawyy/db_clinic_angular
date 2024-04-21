import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs';

const BASIC_URL = ["http://localhost:8080"]

@Injectable({
  providedIn: 'root'
})

export class MedService {

  constructor(private http: HttpClient) { }

  postMed(medicine: any): Observable<any>{
    return this.http.post(BASIC_URL + "/api/medicines", medicine);
  }

  getAllMed(): Observable<any>{
    return this.http.get(BASIC_URL + "/api/medicines");
  }

  deleteMed(id: number): Observable<any>{
    return this.http.delete(BASIC_URL + "/api/medicines/" + id);
  }

  getMedById(id: number): Observable<any>{
    return this.http.get(BASIC_URL + "/api/medicines/" + id);
  }

  updateMed(id: number, medicine: any): Observable<any>{
    return this.http.put(BASIC_URL + "/api/medicines/" + id, medicine);
  }

  
}
