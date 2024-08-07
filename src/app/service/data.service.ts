import { Injectable } from '@angular/core';
import { info } from '@info/info'; 
//constante y el path en tsconfig.json
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private info: any;

  
  constructor() {
    this.info = info;
  }

  // Método para obtener la información
  getInfo() {
    return this.info;
  }

  // Método para establecer la información
  setInfo(args: any) {
    this.info = { ...args };
  }
}
