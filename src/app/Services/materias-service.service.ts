import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MateriasServiceService {

  constructor(private http: HttpClient) { }

  getMts(){
    return this.http.get('http://localhost:3000/materias');
  }
}

