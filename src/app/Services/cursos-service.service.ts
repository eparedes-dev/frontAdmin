import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosServiceService {

  constructor(private http: HttpClient) { }

  getCrs(){
    return this.http.get('http://localhost:3000/cursos');
  }
}
