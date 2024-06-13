import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'footer',component:FooterComponent},
  {path:'header',component:HeaderComponent}

];
