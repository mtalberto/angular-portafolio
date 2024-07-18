import { Injectable } from '@angular/core';
import { experiences } from '@info/experience'; 
//constante en api y el path en tsconfig.json
@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor() {}

  getExperiences() {
    return experiences;
  }
}
