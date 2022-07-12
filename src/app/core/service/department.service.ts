import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) {}

  getDepartmentList(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/admin/department/list');
  }

  addDepartment(data: any) :Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/admin/department/add', data)
  }

  updateDepartment(data: any) :Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/admin/department/add', data)
  }
}
