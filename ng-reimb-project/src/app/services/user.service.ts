import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface User{
  user_id : string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  email: string;
  role_id: string;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  
  getUser(): void{

  }

}
