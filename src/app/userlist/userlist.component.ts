import { Component} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { NewuserComponent } from '../newuser/newuser.component';
import { UpdateuserComponent } from '../updateuser/updateuser.component';
import { UserService } from '../service/user.service';
import { Router, RouterModule,Route,Routes } from '@angular/router';

import { HttpClient ,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent   {
  users: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 4;
  totalItems: number = 10;
  showTable: boolean = false;  
  
  constructor(
    private dialog: MatDialog,
    private http: HttpClient,private userService: UserService,private router:RouterModule) {}
   
    addUserForm() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.panelClass = 'custom-dialog-container';
      dialogConfig.width = '75%';
      dialogConfig.height= '50%';
      dialogConfig.position = {
        right: '5%',
        top: '10%'
      };
    
      const dialogRef = this.dialog.open(NewuserComponent, dialogConfig);
      
    }
    updateUserForm() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.panelClass = 'custom-dialog-container';
      dialogConfig.width = '75%';
      dialogConfig.height= '50%';
      dialogConfig.position = {
        right: '5%',
        top: '10%'
      };
    
      const dialogRef = this.dialog.open(UpdateuserComponent, dialogConfig);
      
    }
    // ngOnInit() {
    //   this.displayUserList();
    // }
    
    
  
    displayUserList() {
      
       
      

      const userData = {
        
      }
  
      this.userService.listUser(userData).subscribe(
        (response: any) => {
          console.log('successfull', response);
          this.users = response;
          this.showTable = true;
          
        },
        (error: any) => {
          console.log(' ', error);
        }
      )
  
    }
    onPageChange(page: number) {
      this.currentPage = page;
      // Fetch the data for the new page
      // this.displayUserList();
    }
  
    getPaginatedUsers(): any[] {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.users.slice(startIndex, endIndex);
    }
    getTotalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    }
    
    deleteUser(id: any){
      this.userService.deleteUser(id).subscribe(
        (response: any) => {
          console.log('successfull', response);
          alert("Succesfully deleted!");
          // this.users=response;
        },
        (error: any) => {
          console.log(' ', error);
        }
      )
    }
}











