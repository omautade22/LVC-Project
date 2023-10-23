//import { ModuleWithProviders } from '@angular/core';
//import {RouterModule} from ‘@angular/core’;
import { Routes, RouterModule } from '@angular/router'; 
//module for implementing routing

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistrationComponent } from './registration/registration.component';
import { JavaComponent } from './java/java.component';
import { MeanComponent } from './mean/mean.component';
import { MernComponent } from './mern/mern.component';
import { RestComponent } from './rest/rest.component';


export const router: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' }, //default page
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact-us', component: ContactUsComponent},
    { path: 'gallery', component: GalleryComponent},
    { path: 'registration', component: RegistrationComponent},
    { path: 'java', component: JavaComponent},
    { path: 'mean', component: MeanComponent},
    { path: 'mern', component: MernComponent},
    { path: 'RestUser', component: RestComponent}
    

];

export const routes = RouterModule.forRoot(router);