import { EmployeeService } from './../../../core/service/employee.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomPaginatorComponent } from '../../custom-paginator/custom-paginator.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useClass: CustomPaginatorComponent },
  ],
})
export class EmployeeListComponent implements OnInit {
  departmentList: any = [];
  ELEMENT_DATA: IEmployee[] = [];
  displayedColumns: string[] = [
    'name',
    'userName',
    'email',
    'department',
    'jobPosition',
    'role',
    'action',
  ];
  dataSource = new MatTableDataSource<IEmployee>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private employeeService: EmployeeService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe((res) => {
      if (res.data != null) {
        this.ELEMENT_DATA = res.data as IEmployee[];
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.departmentList = res.map((item: any) => item['department']);
      } else {
        alert(res.description);
      }
      this.departmentList = this.departmentList.filter(
        (el: any, i: any, a: string | any[]) => i === a.indexOf(el)
      );
    });

    this.dataSource.filterPredicate = (
      data: { department: string },
      filterValue: string
    ) => data.department.trim().toLowerCase().indexOf(filterValue) !== -1;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onChange(getDepartment: any) {
    this.dataSource.filter = getDepartment.trim().toLowerCase();
  }

  openDialog() {
    this.dialog.open(EmployeeDialogComponent, {
      width: '50%'
    });
  }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe((res) => {
      alert(res.message)
    })
  }
}

export interface IEmployee {
  name: string;
  userName: string;
  email: string;
  department: string;
  jobPosition: string;
  role: string;
}
