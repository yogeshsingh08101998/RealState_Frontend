import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://localhost:44394/api/User/UserLogin'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // login(username: string, password: string): Observable<any> {
  //   debugger
  //   const loginUrl = `${this.apiUrl}/login`; // Replace with your login endpoint

  //   // Set the request headers if needed
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });

  //   // Prepare the login data
  //   const loginData = {
  //     username: username,
  //     password: password,
  //   };

  //   // Make the login request
  //   return this.http.post(loginUrl, loginData);
  // }
  login(username: string, password: string):Observable<any>
  {
    debugger
    const loginData = {
         username: username,
           password: password,
         };
    return this.http.post<any>(this.apiUrl,loginData);
  }
}
