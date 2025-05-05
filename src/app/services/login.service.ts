import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:5000/api/auth/login'; // Your backend API

  constructor(private http: HttpClient) {}

  login(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}
