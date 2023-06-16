
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router, RouterModule,Route,Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent {
  Adduser = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required])
  });

  constructor(private userService: UserService, private router: Router, private dialogRef: MatDialogRef<NewuserComponent>) { }
  goBack(): void {
      this.dialogRef.close();
     }
  onSubmit(): void {
    if (this.Adduser.valid) {
      const userData = {
        name: this.Adduser.get('name')?.value,
        gender: this.Adduser.get('gender')?.value,
        email: this.Adduser.get('email')?.value,
        status: this.Adduser.get('status')?.value
      };

      this.userService.addUser(userData).subscribe(
        (response: any) => {
          console.log('Data posted successfully:', response);
          window.alert('Parameter added successfully');
          this.goBack(); // Navigate to the user list component
        },
        (error: any) => {
          console.log('An error occurred:', error);
          window.alert('Invalid data');
        }
      );
    }
  }
}
