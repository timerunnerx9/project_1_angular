import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { HomeComponent } from './components/home/home.component';
import { EmpReimbComponent } from './components/empreimb/empreimb.component';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {ReimbService} from './services/reimb.service';
import {LoginComponent } from './components/login/login.component';
import {LoginService} from './services/login.service';
import {FormsModule} from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { FinreimbComponent } from './components/finreimb/finreimb.component';
import { Fin2reimbComponent } from './components/fin2reimb/fin2reimb.component';



@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HomeComponent,
    EmpReimbComponent,
    LoginComponent,
    NavComponent,
    FinreimbComponent,
    Fin2reimbComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, ReimbService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
