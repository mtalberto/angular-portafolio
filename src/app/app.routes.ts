import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CvComponent } from './cv/cv.component';
import { ContactoComponent } from './contacto/contacto.component';


export const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'footer',component:FooterComponent},
  {path:'header',component:HeaderComponent},
  {path:'cv',component:CvComponent},
  {path:'contacto',component:ContactoComponent}

];
