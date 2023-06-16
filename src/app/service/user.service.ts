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
    updateUser(userId: string, userData: any) {
      const url = `https://gorest.co.in/public/v2/users/${userId}?access-token=9def0d50c71e0d10ccdeea8496d2e14c77b34f6302fa03abef7f1de870b982fd`;
    
      // PUT request
      return this.http.put(url, userData);
    }
  
    
  deleteUser(id: any){
       const url ='https://gorest.co.in/public/v2/users/'+id+'?access-token=9def0d50c71e0d10ccdeea8496d2e14c77b34f6302fa03abef7f1de870b982fd';
  // delete request
       return this.http.delete(url,id);
  }
  }

//   private apiUrl = 'https://gorest.co.in/public/v2/users';
//   private token = '9def0d50c71e0d10ccdeea8496d2e14c77b34f6302fa03abef7f1de870b982fd';

//   constructor(private http: HttpClient) { }
// //get
//   getUserList() {
//     return this.http.get<any[]>(this.apiUrl);
//   }
// //post
//   addUser(user: any) {
//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${this.token}`
//     });

//     return this.http.post(this.apiUrl, user, { headers });
//   }
   
  //   updateUser(userId: number, user: any) {
  //     const headers = new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${this.token}`
  //     });
    
  //     const url = `${this.apiUrl}/${userId}`;
    
  //     return this.http.put(url, user, { headers });
  //   }
  //  }
  // deleteItem(userId: number) {
  //   const url = `${this.apiUrl}/${userId}`;
  //   return this.http.delete(url);
  // }
  

