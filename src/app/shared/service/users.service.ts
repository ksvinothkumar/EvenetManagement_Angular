import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  userRegister(userdetails: any) {
    const url = environment.apiUrl + 'users/registration';
    return this.http.post(url, userdetails);
  }

  getRegisteredUsers() {
    const url = environment.apiUrl + 'users/registration';
    return this.http.get(url);
  }

  userLogin(userCredential: any) {
    const url = environment.apiUrl + 'users/login';
    return this.http.post(url, userCredential);
  }
}
