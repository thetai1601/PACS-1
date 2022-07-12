import { EmployeeService } from './../../../core/service/employee.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  role: any;
  position: any;
  department: any;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getRole().subscribe((res) => {
      this.role = res.data;
    });
    
    this.employeeService.getPosition().subscribe((res) => {
      this.position = res.data;
    })

    this.employeeService.getDepartment().subscribe((res) => {
      this.department = res.data;
    })
  }
}

export interface Role {
  id: number;
  name: string;
}
