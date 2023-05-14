import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaestrosServiceService {

  constructor(private http: HttpClient) { }

  getMto(){
    return this.http.get('http://localhost:3000/maestros');
  }
}
