import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {}

  getEmployeeList(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/admin/employee/list');
  }

  deleteEmployee(id: any): Observable<any> {
    return this.httpClient.delete(
      `http://localhost:8080/api/admin/employee/delete/${id}`
    );
  }

  getRole(): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/api/admin/role/list`);
  }

  getPosition(): Observable<any> {
    return this.httpClient.get(
      `http://localhost:8080/api/admin/jobposition/list`
    );
  }

  getDepartment() :Observable<any> {
    return this.httpClient.get(
      `http://localhost:8080/api/admin/department/list`
    )
  }
}
