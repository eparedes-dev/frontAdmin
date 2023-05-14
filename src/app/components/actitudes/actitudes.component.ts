import { Component } from '@angular/core';
import { ActitudesServiceService } from 'src/app/Services/actitudes-service.service';

interface Actitud{
  idactitud: number;
  act: string;
}

@Component({
  selector: 'app-actitudes',
  templateUrl: './actitudes.component.html',
  styleUrls: ['./actitudes.component.css']
})
export class ActitudesComponent {

  actitudes: Actitud[] = [];

  constructor(private actSrv: ActitudesServiceService) { }

  ngOnInit(): void {
      this.actSrv.getAct().subscribe((data:any)=>{
        this.actitudes = data;
      });
    }
}
