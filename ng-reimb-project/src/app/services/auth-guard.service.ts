import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Injectable({
  providedIn: 'root'
})


export class AuthGuardService {

  constructor(public loginService:LoginService, 
    public router:Router) { }


  canActivate():boolean{
    // if(!this.loginService.localStorage.getItem('user')){
    //   return false;
    // }
    // return true;
    if(!this.loginService.localStorage.getItem('user')){
      return false;
    }
    return true;
  }




}
