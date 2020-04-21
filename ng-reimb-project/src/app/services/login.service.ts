import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from './user.service';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) { 
  }

  public localStorage = localStorage;

  
  userChanged = new Subject<User>();
  public userChanged$ = this.userChanged.asObservable();

  private user:User ={
    user_id: '',
    username: '',
    password: '',
    firstname:'',
    lastname:'',
    email:'',
    role_id:''
  }
  
  errorChanged = new Subject<boolean>();
  public errorChanged$ = this.errorChanged.asObservable();


getUser(){
  return this.user;
}

deleteUser(){
  this.user.user_id='';
}


loginVerification(username:string, password:string): void {
  const url = "http://localhost:8081/project_1/LoginServlet"

   let params = new HttpParams()
        .set("name",username)
        .set("password",password)


  this.httpClient.post<User>(url,params,{withCredentials: true})
    .subscribe(
      val=>
  {
    this.user.user_id =val.user_id,
    this.user.username=val.username,
    this.user.password=val.password,
    this.user.firstname=val.firstname,
    this.user.lastname = val.lastname,
    this.user.email=val.email,
    this.user.role_id=val.role_id
  },
  error => {this.errorChanged.next(true)},
  ()=>{
    this.localStorage.setItem('user',this.user.user_id);
    this.localStorage.setItem("role",this.user.role_id);
    this.userChanged.next(this.user);
  }
    )

}

}