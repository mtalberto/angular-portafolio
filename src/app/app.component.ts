import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';



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
    AboutComponent,
  ],
})
export class AppComponent {

  title = 'angular-portafolio';
}
