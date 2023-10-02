import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  username:string="";
  user:any

  constructor(private authService: AuthService,private route: Router,private cd: ChangeDetectorRef) {
    console.log("hi nav");
  }

  ngOnInit(){
    debugger
    this.route.events.subscribe((val: any) => {
      if (val.url) {
       
         // this.user = localStorage.getItem("username");
         this.user = this.authService.getLoggedInUsername();
          this.username = this.user;
          this.cd.detectChanges();
      
      }
    });

  }


  logout() {
    debugger
    this.authService.logout();
    window.location.reload();
   
  }
}
