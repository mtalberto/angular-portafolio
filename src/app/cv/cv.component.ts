import { Component,OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import * as awesomesolid from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { info } from '../..//assets/api/info.js';

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

  constructor(private dataService: DataService){}
  
  
  

  ngOnInit(): void {
    this.tittle = 'Curriculum Vitae';
    this.about = awesomesolid.faLocationDot;
    // Cargar los datos en el servicio
    this.dataService.setInfo(info);
    this.info = this.dataService.getInfo();
  }
}
