import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API = 'http://localhost:8080/api';
const API_EMPLOYEE = 'http://localhost:8080/api/admin/employee';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userId = window.sessionStorage.getItem('user-id');

  constructor(private httpClient: HttpClient) {}

  login(data: any): Observable<any> {
    return this.httpClient.post(`${API}/login`, data);
  }

  refreshToken(token: string) {
    return this.httpClient.post(
      `${API_EMPLOYEE}/token/refresh`,
      {
        refreshToken: token,
      },
      httpOptions
    );
  }

  isLoggedIn() {
    return window.sessionStorage.getItem('token-key') != null;
  }

  findById(): Observable<any> {
    return this.httpClient.get(
      `${API_EMPLOYEE}/findById/${this.userId}`,
      httpOptions
    );
  }
}
