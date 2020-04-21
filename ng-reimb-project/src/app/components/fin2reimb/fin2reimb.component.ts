import { Component, OnInit } from '@angular/core';
import { Reimb, ReimbService } from 'src/app/services/reimb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fin2reimb',
  templateUrl: './fin2reimb.component.html',
  styleUrls: ['./fin2reimb.component.css']
})
export class Fin2reimbComponent implements OnInit {


    reimbrecords: Reimb[]= [];
  
    
    constructor(private reimbService:ReimbService,
      private router:Router) { }
  
    ngOnInit(): void {
      this.reimbService.getAllReimb();
      this.reimbService.reimbRecord$.subscribe(reimbrecords =>
        {
          this.reimbrecords = reimbrecords;
        });
    }
  
  toggle(id) {
    var element = document.getElementById(id);
    element.style.display = element.style.display === 'block' ? 'none' : 'block';
  }
  
  
    onApprove(reimb_id:string):void{
      this.reimbService.approveReimb(reimb_id);
    }
  
    onReject(reimb_id:string):void{
      this.reimbService.rejectReimb(reimb_id);
    }
  
  
  
    onBack(){
      this.router.navigate(['/home'])
    }
  }


