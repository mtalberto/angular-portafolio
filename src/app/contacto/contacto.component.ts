import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'], // Corrige 'styleUrl' a 'styleUrls'
})
export class ContactoComponent {
  formulario!: FormGroup;
  contacto: string = 'Contacto';
  ptnemail: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$';

  //gets////////
  get nombreNoValido() {
    return (
      this.formulario.get('nombre')?.invalid &&
      this.formulario.get('nombre')?.touched
    );
  }

  get mensajeNoValido() {
    return (
      this.formulario.get('mensaje')?.invalid &&
      this.formulario.get('mensaje')?.touched
    );
  }

  get emailNoValido() {
    return (
      this.formulario.get('email')?.invalid &&
      this.formulario.get('email')?.touched
    );
  }

  get asuntoNoValido() {
    return (
      this.formulario.get('asunto')?.invalid &&
      this.formulario.get('asunto')?.touched
    );
  }

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }
  
  crearFormulario() {
    this.formulario = this.fb.group({
      mensaje: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern(this.ptnemail)]],
      asunto: ['', [Validators.required, Validators.minLength(5)]],
      nombre: ['', [Validators.required]],
    });
  }

  guardar() {
    console.log(this.formulario.value);
    //compruebo si el formulario es invalido
    if (this.formulario.invalid) {
      // y recorro cada input para validar uno a no
     return Object.values(this.formulario.controls).forEach((control) => {
       control.markAllAsTouched(); 
     });
    } else{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El formulario es correcto',
        text: ' Pero es solo un test',
        showConfirmButton: false,
        timer: 1500,
      });
    }
   
  
  }
  //limpiar los campos
  limpiar() {
    this.formulario.reset();
  }
}
