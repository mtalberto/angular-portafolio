import { Component } from '@angular/core';
import { environment } from '../environments/enviroment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private router: Router) {}

  goToLinkedIn() {
    window.open(
      'https://www.linkedin.com/in/alberto-maneiro-tub%C3%ADo-116aba204/',
      '_blank'
    );
  }
  imageURL = environment.imageURL;
  title = 'Sobre Mi';
}
