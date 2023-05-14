import { Component } from '@angular/core';
import { AlumnosServiceService } from 'src/app/Services/alumnos-service.service';

interface Alumno{
  idalumno: number,
  nombre: string,
  materia: string,
  actitud: string
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  alumnos: Alumno[] = [];

  constructor(private almSrv: AlumnosServiceService) { }

  ngOnInit(): void {
      this.almSrv.getAlm().subscribe((data:any)=>{
        this.alumnos = data;
      });
    }
}

