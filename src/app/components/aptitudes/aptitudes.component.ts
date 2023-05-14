import { Component, OnInit } from '@angular/core';
import { AptitudesServiceService } from 'src/app/Services/aptitudes-service.service';

interface  Aptitud {
  id: number;
  apt: string;
}

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})

export class AptitudesComponent implements OnInit{
 
  aptitudes: Aptitud[] = [];

  constructor(private aptSrv: AptitudesServiceService) { }

  ngOnInit(): void {
      this.aptSrv.getApt().subscribe((data:any)=>{
        this.aptitudes = data;
      });
    }

 
}
