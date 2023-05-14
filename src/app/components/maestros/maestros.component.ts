import { Component } from '@angular/core';
import { MaestrosServiceService } from 'src/app/Services/maestros-service.service';

interface Maestro{
  idmaestro: number,
  nombre: string,
  materia: string,
  aptitud: string
}

@Component({
  selector: 'app-maestros',
  templateUrl: './maestros.component.html',
  styleUrls: ['./maestros.component.css']
})
export class MaestrosComponent {
  maestros: Maestro[] = [];

  constructor(private mstSrv: MaestrosServiceService) {}

  ngOnInit(): void{
    this.mstSrv.getMto().subscribe((data:any)=>{
      this.maestros = data;
    });
  }
}
