import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './app/environments/enviroment';
import   AOS  from 'aos';
import { enableProdMode } from '@angular/core';


if (environment.production) {
  enableProdMode();
}

AOS.init();


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

