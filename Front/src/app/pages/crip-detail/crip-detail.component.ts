import { Component } from '@angular/core';
import { CriptosI } from 'src/app/interfaces/criptos';
import { CriptosvcService } from 'src/app/service/criptosvc.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crip-detail',
  templateUrl: './crip-detail.component.html',
  styleUrls: ['./crip-detail.component.css']
})
export class CripDetailComponent {
  id!: number;
  crypto!: CriptosI;

  constructor(private svcCripto: CriptosvcService, private activatedRoute: ActivatedRoute, private router: Router){}
  
  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params) => {
         this.id = Number(params.get('id'));
      })

     this.svcCripto.getCryptoByID(this.id).subscribe((data: any) => {
      this.crypto = data;
      console.log('datos:',data)
    })
  }

  editCryto() {
    this.svcCripto.setCripto(this.crypto, this.id);
    this.router.navigate(['gestion']);
  }

  deleteCryto(){
    this.svcCripto.deleteCripto(this.id).subscribe((data) => {
      console.log("Moneda borrada");
      this.router.navigate(["/"]);
    })
  }

  getMyCripto(){
    return this.crypto;
  }
  getMyId(){
    return this.id;
  }

}
