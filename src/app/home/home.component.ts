import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent  implements OnInit {
  
  private _nombre = 'Alberto Maneiro';
  private _asignacion = 'Soy desarrollador ';



  ngOnInit(): void {
    let descripcion={
      strings:['', ' FrontEnd ', ' Software ','Backend' ],
      typeSpeed:140,
      backSpeed:100,
      
      loop:true
    };
    
    let escribir= new Typed('.escribir',descripcion);
    escribir.reset(true);
  }






  public get nombre() {
    return this._nombre;
  }
  public set nombre(value) {
    this._nombre = value;
  }
 

  public get asignacion() {
    return this._asignacion;
  }
  public set asignacion(value) {
    this._asignacion = value;
  }
}
