import { EditDepartmentComponent } from './../edit-department/edit-department.component';
import { DepartmentService } from './../../../core/service/department.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CustomPaginatorComponent } from '../../custom-paginator/custom-paginator.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss'],
  providers: [
    { provide: MatPaginatorIntl, useClass: CustomPaginatorComponent },
  ],
})
export class DepartmentListComponent implements OnInit {
  ELEMENT_DATA: IDepartment[] = [];
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = new MatTableDataSource<IDepartment>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(private departmentService: DepartmentService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.departmentService.getDepartmentList().subscribe((res) => {
      if (res.data != null) {
        this.ELEMENT_DATA = res.data as IDepartment[];
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } else {
        alert(res.description);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    this.dialog.open(EditDepartmentComponent, {
      width: '50%',
    });
  }

  deleteEmployee(id: any) {
    
  }
}

export interface IDepartment {
  id: number;
  name: string;
}
