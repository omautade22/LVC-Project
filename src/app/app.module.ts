import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
// import { RegistrationGalleryContactUsComponent } from './registration-gallery-contact-us/registration-gallery-contact-us.component';
import { RegistrationComponent } from './registration/registration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MeanComponent } from './mean/mean.component';
import { MernComponent } from './mern/mern.component';
import { JavaComponent } from './java/java.component';
import { ReactiveFormsModule } from '@angular/forms';
import{UserService}from'./user.service';
import { LightboxModule } from 'ngx-lightbox';
import{HttpClientModule}from'@angular/common/http';
import { RestComponent } from './rest/rest.component';
// import { RestUsersComponent } from './rest-users/rest-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
declarations: [
AppComponent,
AboutComponent,
ServicesComponent,
HomeComponentComponent,
HeaderComponent,
CoursesComponent,
// RegistrationGalleryContactUsComponent,
RegistrationComponent,
GalleryComponent,
ContactUsComponent,
FooterComponent,
NavigationComponent,
MeanComponent,
MernComponent,
JavaComponent,
RestComponent,

],
imports: [
BrowserModule, ReactiveFormsModule,HttpClientModule,LightboxModule,BrowserAnimationsModule,
routes
],
providers: [UserService],
bootstrap: [AppComponent]
})
export class AppModule { }