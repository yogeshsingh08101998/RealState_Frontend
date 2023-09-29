import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    SignUpComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatIconModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
