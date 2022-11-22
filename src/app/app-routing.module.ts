import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/pages/homepage/homepagecomponent';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';

import { ServiceComponent } from './components/pages/service/service.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { ContactusComponent } from './components/pages/contactus/contactus.component';
import { SolucionesComponent } from "./components/pages/soluciones/soluciones.component";

const routes: Routes = [

{path: '', component: HomepageComponent},
{path: 'nosotros', component: AboutusComponent},
{path: 'servicios', component: ServiceComponent},
{path: 'clientes', component: PortfolioComponent},
{path: 'contactanos', component: ContactusComponent},
{path: 'contactanos', component: ContactusComponent},
{path: 'soluciones', component:SolucionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
