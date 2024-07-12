import { Injectable } from '@angular/core';
import {info} from '../../assets/api/info';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private info: any;

  
  constructor() {}

  // Método para obtener la información
  getInfo() {
    return this.info;
  }

  // Método para establecer la información
  setInfo(args: any) {
    this.info = { ...args };
  }
}
