import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router, RouterModule,Route,Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  
  Updateuser = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required])
  });
  users: any[] = [];
  user: any;
  constructor(private userService: UserService, private router: Router, private dialogRef: MatDialogRef<UpdateuserComponent>,) { }
  goBack(): void {
      this.dialogRef.close();
     }
  
     updateUserList(id:any) {

      const userData = {
        
      }
    
      this.userService.updateUser(id,userData).subscribe(
        (response: any) => {
          console.log('successfull', response);
          
        },
        (error: any) => {
          console.log(' ', error);
        }
      )
}
}