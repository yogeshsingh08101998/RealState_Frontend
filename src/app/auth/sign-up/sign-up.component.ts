import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender, GenderOption, SignupModel } from 'src/app/Models/signup_model';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signupForm:FormGroup;
 
  model:SignupModel = new SignupModel();

  genders: GenderOption[] = [];
  constructor(private fb:FormBuilder)
  {
    const genderMapping: { [key: string]: GenderOption } = {
      [Gender.Male]: { value: Gender.Male, label: 'Male' },
      [Gender.Female]: { value: Gender.Female, label: 'Female' },
      [Gender.Other]: { value: Gender.Other, label: 'Other' }
    };

    this.genders = Object.values(genderMapping);
    this.signupForm = this.fb.group({
      firstname:[this.model.firstname,[Validators.required]],
      lastname:[this.model.lastname,[Validators.required]],
      username: [this.model.username, [Validators.required]],
      email: [this.model.email, [Validators.required, Validators.email]],
      gender: [this.model.gender, [Validators.required]],
      phonenumber:[this.model.phonenumber,[Validators.required]],
      address: [this.model.address, [Validators.required]]
    });
  }
  signup()
  {
    debugger
    if (this.signupForm.valid) {
      this.model = this.signupForm.value as SignupModel;
      // Perform your signup logic here, e.g., send an HTTP request to a server
      console.log('Signup Data:', this.model);
  }
}
}
