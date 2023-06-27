import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CriptosI } from '../interfaces/criptos'

@Injectable({
  providedIn: 'root'
})
export class CriptosvcService {
  public url:string = 'http://localhost:3000/criptomonedas';

  id!:number;
  cripto!: CriptosI;

  constructor(private http: HttpClient) { }

  getCriptos () {
    return this.http.get(this.url)
  }
  getCryptoByID (id:number) {
    return this.http.get(`http://localhost:3000/criptomonedas/${id}`)
  }

  deleteCripto(id: number){
    return this.http.delete(`http://localhost:3000/criptomonedas/${id}`);
  }

  postCripto(cryto: CriptosI){
    return this.http.post(`http://localhost:3000/criptomonedas`, crypto);
  }
  putCripto(crypto: CriptosI, id: number){
    return this.http.put(`http://localhost:3000/criptomonedas/${id}`, crypto);
  }
  
  setCripto(crypto: CriptosI, id: number){
    this.cripto = crypto;
    this.id = id;
  }
  getMyCripto(){
    return this.cripto;
  }
  getMyId(){
    return this.id;
  }
  
  setCriptoID(id:number)
  {
    this.id = id;

    if (id == 0)
    {
      this.cripto.symbol = '';
      this.cripto.priority = 0;
      this.cripto.logo = '';
      this.cripto.name = '';
    }
  }
}
