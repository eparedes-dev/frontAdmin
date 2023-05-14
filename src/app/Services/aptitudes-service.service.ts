import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AptitudesServiceService {

  constructor(private http: HttpClient) { }

  getApt(): Observable<any>{
    return this.http.get('http://localhost:3000/aptitudes');
  }
}
