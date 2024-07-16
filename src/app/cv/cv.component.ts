import { Component,OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import * as awesomesolid from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent implements OnInit  {

  info:any;
  tittle:any;
  about:any;
  //inyeccion de dependencia en angular
  //obtengo una "instancia de datasService"
  constructor(private dataService: DataService){}
  
  
  

  ngOnInit(): void {
    this.tittle = 'Curriculum Vitae';
    this.about = awesomesolid.faLocationDot;
    // Cargar los datos en el servicio
   
    this.info = this.dataService.getInfo();
  }
  //obtengo la informacion para poder usarlo en el html
  get infoAbout(){
    return this.dataService.getInfo().data;
  }
}
