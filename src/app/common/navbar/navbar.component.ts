import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  username:any;

  constructor(private authService: AuthService) {
    console.log("hi nav");
  }

  ngOnInit(){
    // Set initial value
   
    this.username = this.authService.getLoggedInUsername();

    // Subscribe to changes in the username
 
  }

  logout() {
    debugger
    this.authService.logout();
  }
}
