import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActitudesServiceService {

  constructor(private http: HttpClient) { }

  getAct(){
    return this.http.get('http://localhost:3000/actitudes');
  }
}
