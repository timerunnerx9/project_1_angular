import { Component, OnInit, ViewChild, Input, EventEmitter } from '@angular/core';
import {LoginService} from 'src/app/services/login.service'
import { NgForm } from '@angular/forms';
import {Router, CanActivate } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent implements OnInit {
 
@ViewChild("f1") loginForm:NgForm;

constructor(
  private loginService : LoginService,
  private router: Router,
  private authGuard : AuthGuardService
  ) { }


  // private user;

  isError:boolean = false; 

  ngOnInit(): void {
    // if(this.loginService.localStorage.getItem('user')){
    //   this.router.navigate(['/home'])
    // }
  }

  navigatehome(){
     this.router.navigate(['/home'])
   }
 
  async onSubmit(){
    this.loginService.loginVerification(this.loginForm.value.username, 
      this.loginForm.value.userpassword);

     this.loginService.userChanged$.subscribe(
       user=>
     { 
       this.navigatehome()
       },
       error=>{
        // this.isError=true;
       },
       ()=>{
        
      
       }
     )

       this.loginService.errorChanged$.subscribe(
         (result)=> this.isError = result
       )
     
    
  }
}



 