import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './components/content/content.component';
import { EmpReimbComponent } from './components/empreimb/empreimb.component';
import { FinreimbComponent } from './components/finreimb/finreimb.component';
import { Fin2reimbComponent } from './components/fin2reimb/fin2reimb.component';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
 


const routes : Routes = [
  {component:LoginComponent, path:'login'},
  {component:HomeComponent, path:'home', canActivate:[AuthGuardService]},
  {component:EmpReimbComponent, path:'empreimb',canActivate:[AuthGuardService]},
  {component:ContentComponent, path:'content',canActivate:[AuthGuardService]},
  {component:FinreimbComponent, path: 'finreimb',canActivate:[AuthGuardService]},
  {component:Fin2reimbComponent, path: 'fin2reimb',canActivate:[AuthGuardService]},
  {component:LoginComponent, path: '**'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
