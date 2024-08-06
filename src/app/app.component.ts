import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from './header/header.component';
import { CvComponent } from './cv/cv.component';
import { ContactoComponent } from "./contacto/contacto.component";





@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CvComponent,
    ContactoComponent,
  
  ],
})
export class AppComponent {
  title = 'angular-portafolio';

  
}
