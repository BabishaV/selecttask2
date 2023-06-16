import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ MatDialogModule} from '@angular/material/dialog'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { NewuserComponent } from './newuser/newuser.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
// import {  } from '@angular/forms';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule,Route,Routes } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'',component:UserlistComponent},
   {path:'adduser',component:NewuserComponent},
  
]
@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    NewuserComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    
   
    
    MatPaginatorModule,
    HttpClientModule, RouterModule.forRoot(routes),ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
