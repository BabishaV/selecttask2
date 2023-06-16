import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

    constructor(private http: HttpClient) { }
    listUser(userData: any) {
      const url = 'https://gorest.co.in/public/v2/users?access-token=9def0d50c71e0d10ccdeea8496d2e14c77b34f6302fa03abef7f1de870b982fd';
  
      // GET request
      return this.http.get(url, userData);
    }
  
    addUser(userData: any) {
      const url = 'https://gorest.co.in/public/v2/users?access-token=9def0d50c71e0d10ccdeea8496d2e14c77b34f6302fa03abef7f1de870b982fd'; // Replace with your API endpoint URL
  
      //  POST request
      return this.http.post(url, userData);
    }
    
    updateUser( id:any,userData: any) {
      
      const url ='https://gorest.co.in/public/v2/users/'+id+'?access-token=9def0d50c71e0d10ccdeea8496d2e14c77b34f6302fa03abef7f1de870b982fd';
      // Patch request
      return this.http.patch(url, userData);
    }
  
    
  deleteUser(id: any){
       const url ='https://gorest.co.in/public/v2/users/'+id+'?access-token=9def0d50c71e0d10ccdeea8496d2e14c77b34f6302fa03abef7f1de870b982fd';
  // delete request
       return this.http.delete(url,id);
  }
  }

