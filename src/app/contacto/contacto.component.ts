import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  // indica que esta variable NO sera null ni undefined !
  formgroup!:FormGroup;
  contacto:string ='Contacto';
  
  constructor(private fb:FormBuilder){

  }
  //4 campos
  crearFormulario(){
    this.formgroup=this.fb.group({
       mensaje:[''],
       email:[''],
       asunto:[''],
       nombre:[''],

    })

  }

  //testing
  guardar(){
    console.log(this.formgroup);

  }


  limpiarFormulario(){
    this.formgroup.reset();
  }

}
