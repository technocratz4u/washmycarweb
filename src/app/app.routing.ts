import { RouterModule, Routes } from '@angular/router';

import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'login', component: LoginComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
