import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CriptosI } from '../../interfaces/criptos'
import { CriptosvcService } from 'src/app/service/criptosvc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})

export class GestionComponent implements OnInit{
  id!:number;
  crypto!:CriptosI;
  submitted: boolean = false;
  criptoForm!: FormGroup;

  constructor(private svcCripto: CriptosvcService, private form: FormBuilder, private router: Router){
    this.crypto = this.svcCripto.getMyCripto();
    this.id = this.svcCripto.getMyId();
  }
  
  ngOnInit(): void {
    this.criptoForm = this.form.group({
      symbol: [this.crypto.symbol, [Validators.required, Validators.minLength(2)]], 
      priority: [this.crypto.priority, [Validators.required]],
      logo:[this.crypto.logo, [Validators.required]],
      name: [this.crypto.name, [Validators.required]]
    })

    this.criptoForm.valueChanges.subscribe((data) => {
      this.crypto = data;
    })
  }

  editCripto(){
    this.submitted = true;
    if(this.criptoForm.valid){
      if (this.id)
       {
         this.svcCripto.putCripto(this.crypto, this.id).subscribe((data) => {
           console.log(data);
           this.criptoForm.reset();
           this.submitted = false;
           this.router.navigate(["listado"]);
         })
       }  
      else
       {
        
       }
    }
    
    this.criptoForm.reset();
  }
}
 