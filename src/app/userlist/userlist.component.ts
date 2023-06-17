







import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewuserComponent } from '../newuser/newuser.component';

import { UserService } from '../service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  users: any[] = [];
  selectedUser: any;
  currentPage: number = 1;
  itemsPerPage: number = 4;
  totalItems: number = 10;
  showTable: boolean = false;
  isFormOpen: boolean = false;
  isviewFormOpen:boolean=false;
  updateuser: FormGroup;
 
userData: any;
  constructor(private dialog: MatDialog, private userService: UserService) {
    this.updateuser = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
    });
  }
// Add user Form
  addUserForm() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-dialog-container';
    dialogConfig.width = '75%';
    dialogConfig.height = '50%';
    dialogConfig.position = {
      right: '5%',
      top: '10%'
    };

    const dialogRef = this.dialog.open(NewuserComponent, dialogConfig);
  }
  
// Display the user data 

  displayUserList() {
    const userData = {};

    this.userService.listUser(userData).subscribe(
      (response: any) => {
        console.log('successfull', response);
        this.users = response;
        this.showTable = true;
      },
      (error: any) => {
        console.log('Error:', error);
      }
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    
  }

  getPaginatedUsers(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.users.slice(startIndex, endIndex);
  }

  getTotalPages() {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }
// delete the user data in the user list
  deleteUser(id: any) {
    this.userService.deleteUser(id).subscribe(
      (response: any) => {
        console.log('Successfully deleted:', response);
        alert('Successfully deleted!');
        // this.users = response;
      },
      (error: any) => {
        console.log('Error:', error);
      }
    );
  }
  // View the user data from the user list
  viewData(user:any){
    this.userData=user;
    this.isviewFormOpen=true;
  }
  reset(): void {
    this.isviewFormOpen = false;
    // Reset form values
    const formElement = document.getElementById('userData.id');
    if (formElement) {
      (formElement as HTMLFormElement).reset();
    }
  }

// Update the user data in the user list
  editUser(user: any): void {
    this.selectedUser = { ...user }; // Create a copy of the selected user object
    this.isFormOpen = true;

  //   // Set the form values based on the selected user
    this.updateuser.patchValue({
      id: this.selectedUser.id,
      name: this.selectedUser.name,
      gender: this.selectedUser.gender,
      email: this.selectedUser.email,
      status: this.selectedUser.status
    });
  }

  goBack(): void {
    this.isFormOpen = false;
    this.updateuser.reset(); 
    // Reset the form values
  }
  

  saveChanges(): void {
    const updatedUser = { ...this.updateuser.value }; // Create a copy of the updated form values
    const userId = updatedUser.id; // Store the user id
    delete updatedUser.id;

   // Update the user data in the user list
    this.users = this.users.map((user: any) => {
      if (user.id === userId) {
        return { id: userId, ...updatedUser }; // Update the user with the form values
      }
      return user;
    });

    this.userService.updateUser(userId, updatedUser).subscribe(
      () => {
        console.log('User updated successfully');
        this.isFormOpen = false; // Close the edit form
      },
      error => {
        console.log('An error occurred while updating the user:', error);
      }
    );
  }
}










