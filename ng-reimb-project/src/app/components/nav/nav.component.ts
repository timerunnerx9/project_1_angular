import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

display:boolean;
  constructor(public loginService : LoginService,
    private router:Router) { }

  role:string;
  ngOnInit(): void {
    this.role = this.loginService.localStorage.getItem("role");

  }

  onLogout(){
    this.loginService.localStorage.clear();
    this.loginService.deleteUser();
    this.router.navigate(['/login'])
  }

}
