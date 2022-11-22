import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomepageComponent } from './components/pages/homepage/homepagecomponent';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { ContactusComponent } from './components/pages/contactus/contactus.component';
import { SolucionesComponent } from "./components/pages/soluciones/soluciones.component";

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ContactService} from './services/contact.service'

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AboutusComponent,
    ServiceComponent,
    PortfolioComponent,
    ContactusComponent,
    SolucionesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
