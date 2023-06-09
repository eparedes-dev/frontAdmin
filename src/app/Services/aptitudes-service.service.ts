import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AptitudesServiceService {

  constructor(private http: HttpClient) { }

  getApt(){
    return this.http.get('http://localhost:3000/aptitudes');
  }
}
