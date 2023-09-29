export class SignupModel {
      public firstname:any;
      public lastname:any;
      public phonenumber:any;
      public username: string = '';
      public email: string = '';
      public gender: string = '';
      public address: string = '';

  }

  export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
  }

  export type GenderOption = { value: any; label: any };