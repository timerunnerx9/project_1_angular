import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {LoginService} from 'src/app/services/login.service';
import { User, UserService } from 'src/app/services/user.service';
import {Router, CanActivate } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
user:User;



  constructor(
    private loginService: LoginService,
    private router:Router) { }

  ngOnInit(): void {
    this.user = this.loginService.getUser();
    if(this.loginService.localStorage.getItem('user')==''){
      this.router.navigate(['/login'])
    }
    
  }

}