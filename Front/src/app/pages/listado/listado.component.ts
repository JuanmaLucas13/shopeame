import { Component } from '@angular/core';
import { CriptosI } from 'src/app/interfaces/criptos';
import { CriptosvcService } from 'src/app/service/criptosvc.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  criptosList:CriptosI[] = [];
  url_base:string = 'https://coinmap.org'

  constructor(private svcCripto: CriptosvcService){

  }

  ngOnInit():void {
    this.svcCripto.getCriptos().subscribe((data:any) => {
      this.criptosList = [...data]
      this.svcCripto.setCriptoID(0);
    })
  }
}
