import { Component, OnInit, ViewChild } from '@angular/core';
import { ReimbService } from 'src/app/services/reimb.service';
import { NgForm } from '@angular/forms';
import { Reimb } from 'src/app/services/reimb.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-empreimb',
  templateUrl: './empreimb.component.html',
  styleUrls: ['./empreimb.component.css']
})



export class EmpReimbComponent implements OnInit {
  @ViewChild('f2') reimbForm:NgForm;
  

  type_id:number;
  receipt:boolean;
  amount:number;
  description:string;



  reimbrecords: Reimb[]= [];



  constructor(private reimbService:ReimbService,
    private router: Router) { }


  ngOnInit(): void {
    this.reimbService.getReimbByUserid();
    this.reimbService.reimbRecord$.subscribe(reimbrecords =>
      {
        console.log(reimbrecords)
        this.reimbrecords = reimbrecords;
        console.log(reimbrecords)
      });
    
  }


dropDownHandler1 (event:any){
  this.type_id=event.target.value;
}

dropDownHandler2 (event:any){
  this.receipt=event.target.value;
}

onSubmit(){
  this.amount = this.reimbForm.value.reimbAmount;
  this.description = this.reimbForm.value.reimbDescription;
  this.reimbService.onCreateReimb(this.type_id,this.amount,this.description,this.receipt);
  this.reimbService.reimbRecord$.subscribe(reimbrecords =>
    {
      this.reimbrecords = reimbrecords;
      this.reimbForm.reset();
    });

 
}

onBack(){
  this.router.navigate(['/home'])
}



}
