import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: '',
   component: HomePageComponent
  },
  { 
    path: 'login', component: LoginPageComponent 
  },
  { 
    path: 'signup', component: SignUpComponent ,canActivate:[AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
