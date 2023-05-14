import { Component, OnInit } from '@angular/core';
import { MateriasServiceService } from 'src/app/Services/materias-service.service';

interface Materia{
  idmateria: number;
  tema: string;
}

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})

export class MateriasComponent implements OnInit {

  materias: Materia[] = [];

  constructor(private mtsSrv: MateriasServiceService){ }

  ngOnInit(): void {
    this.mtsSrv.getMts().subscribe((data:any)=>{
      this.materias = data;
    });
  }
}
