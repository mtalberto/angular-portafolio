import { Component,OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DataService } from '../service/data.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceService } from '../service/experience.service';

/**
 * Common module for , such as NgIf, NgForOf, 
 * DecimalPipe, and so on. Re-exported by BrowserModule, which is included automatically
 *  in the root AppModule when you create a new app with the CLI new command.
 */

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent implements OnInit {
  info: any;
  tittle: string = 'Curriculum Vitae';
  tareas: string = 'Tareas';
  experiences: any[] = [];
  
  //inyeccion de dependencia en angular
  //obtengo una "instancia de datasService"
  constructor(
    private dataService: DataService,
    private experienceService: ExperienceService
  ) {}

  ngOnInit(): void {
    // Cargar los datos desde los servicios
    this.info = this.dataService.getInfo();
    this.experiences = this.experienceService.getExperiences();
  }

  detailsOnClick(experience: any) {
    experience.mostrar = !experience.mostrar;
    let detailIsDisplayed = false;



  }
}
