import { Component } from '@angular/core';
import { CursosServiceService } from 'src/app/Services/cursos-service.service';

interface Curso {
  idcurso: number;
  materia: string;
  maestro: string;
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  cursos: Curso[] = [];

  constructor(private crsSrv: CursosServiceService) {}

  ngOnInit(): void{
    this.crsSrv.getCrs().subscribe((data:any)=>{
      this.cursos = data;
    })
  }

}
