import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;
  private username: any;
  private token: any;
  constructor()
  {
    console.log('AuthService constructor');
  }

  login(username: string, token: string) {
    debugger
    this.isLoggedIn = true;
    this.username = username;
    this.token = token;
    // Store token and username in localStorage
    localStorage.setItem('token', this.token);
    localStorage.setItem('username', this.username);
  }

  logout() {
    this.isLoggedIn = false;
    this.username = undefined;
    this.token = undefined;

    // Remove token and username from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  getLoggedInUsername() {
    return this.username;
  }

  getToken() {
    return this.token;
  }

  isTokenValid(): boolean {
    // Implement your logic to check token validity
    const storedToken = localStorage.getItem('token');
    return !!storedToken;
  }
}
