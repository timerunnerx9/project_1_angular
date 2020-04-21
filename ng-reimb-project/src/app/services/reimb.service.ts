import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, observable, ReplaySubject } from 'rxjs';
import { User } from './user.service';
import { LoginService } from './login.service';



 export interface Reimb{
    reimb_id: number,
    reimb_amount: number;
    reimb_submitted:string,
    reimb_resolved:string,
    reimb_description:string,
    reimb_receipt:string,
    reimb_author:number;
    reimb_resolver:number;
    reimb_status_id:number;
    reimb_type_id:number;
  
}


@Injectable({
  providedIn: 'root'
})
export class ReimbService {

  constructor(private httpClient:HttpClient,
    private loginService :LoginService) { }
  

  reimbRecordChange: ReplaySubject<Reimb[]> = new ReplaySubject<Reimb[]>(); 
  reimbRecords : Reimb[] =[];
  
  public reimbRecord$ = this.reimbRecordChange.asObservable();



  getReimbByUserid(){

    const url = "http://localhost:8081/project_1/ReimbServlet";
    let params = new HttpParams()
    .set("actiontype","101")
    
    this.httpClient.get<Reimb[]>(url,{params,withCredentials:true})
    .subscribe(data =>{
      this.reimbRecords = data;
      this.reimbRecordChange.next(this.reimbRecords);
    },
    (error: HttpErrorResponse) =>{
      console.log(error.name + ' '+ error.message);
    }
    
    );
}


getAllReimb(){

  const url = "http://localhost:8081/project_1/ReimbServlet";
  let params = new HttpParams()
  .set("actiontype","201")
  
  this.httpClient.get<Reimb[]>(url,{params,withCredentials:true})
  .subscribe(data =>{
    this.reimbRecords = data;
    this.reimbRecordChange.next(this.reimbRecords);
  },
  (error: HttpErrorResponse) =>{
    console.log(error.name + ' '+ error.message);
  }
  
  );
}


getAllPendingReimb(){

  const url = "http://localhost:8081/project_1/ReimbServlet";
  let params = new HttpParams()
  .set("actiontype","301")
  
  this.httpClient.get<Reimb[]>(url,{params,withCredentials:true})
  .subscribe(data =>{
    this.reimbRecords = data;
    this.reimbRecordChange.next(this.reimbRecords);
  },
  (error: HttpErrorResponse) =>{
    console.log(error.name + ' '+ error.message);
  }
  
  );
}



approveReimb(reimb_id:string){
  const url = "http://localhost:8081/project_1/ReimbServlet";
  let params = new HttpParams()
    .set("reimb_id",reimb_id)
    .set("actiontype","210")
    this.httpClient.post(url,params,{withCredentials: true})
    .subscribe(()=>{
      this.getAllReimb()
    },
    (error: HttpErrorResponse)=>{
      console.log(error.name + ' '+ error.message);
    }
      
    );
}


rejectReimb(reimb_id:string){
  const url = "http://localhost:8081/project_1/ReimbServlet";
  let params = new HttpParams()
    .set("reimb_id",reimb_id)
    .set("actiontype","220")
    this.httpClient.post(url,params,{withCredentials: true})
    .subscribe(()=>{
      this.getAllReimb()
    },
    (error: HttpErrorResponse)=>{
      console.log(error.name + ' '+ error.message);
    }
      
    );
}




  onCreateReimb(
    reimb_type_id:number,
    reimb_amount:number,
    reimb_description:string,
    reimb_receipt: boolean):void {
    const url = "http://localhost:8081/project_1/ReimbServlet";
    let params = new HttpParams()
      .set("reimb_type_id",String(reimb_type_id))
      .set("reimb_amount", String(reimb_amount))
      .set("reimb_description", reimb_description)
      .set("reimb_receipt", String(reimb_receipt))
      .set("actiontype","102")

    this.httpClient.post(url,params,{withCredentials: true})
      .subscribe(()=>{
        this.getReimbByUserid();
      })

  }





}


