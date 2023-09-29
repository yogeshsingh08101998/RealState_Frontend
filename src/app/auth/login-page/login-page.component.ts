import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/Models/login_model';
import { AuthService } from 'src/app/auth.service';
import { LoginService } from 'src/app/login.service';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  showSpinner:boolean=false;
form: FormGroup;
loginModel:LoginModel = new LoginModel();

constructor(private fb:FormBuilder,private loginService: LoginService, private authService: AuthService,private router:Router)
{
this.form = this.fb.group({
  username:[this.loginModel.username,[Validators.required]],
  password:[this.loginModel.password,[Validators.required]]
})
}
  login()
  {
    debugger
    this.loginModel = this.form.value;
    if (this.loginModel.username.trim() !== '' && this.loginModel.password.trim() !== '') {
      // Make the login request using the LoginService
      this.loginService.login(this.loginModel.username,this.loginModel.password).subscribe(
        (response:any) => {
          // Assuming the API returns a token
          const token = response.token;

          // Store the token and username in the AuthService
          this.authService.login(this.loginModel.username, token);

          // Optionally, navigate to a different page after successful login
           this.router.navigate(['/signup']);
        },
        (error:any) => {
          console.error('Login failed', error);
          // Handle login error, e.g., show an error message
        }
      );
    }
  
    
  }
}
