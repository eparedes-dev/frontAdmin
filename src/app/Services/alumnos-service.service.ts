import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosServiceService {

  constructor(private http: HttpClient) { }

  getAlm(){
    return this.http.get('http://localhost:3000/alumnos');
  }
}
