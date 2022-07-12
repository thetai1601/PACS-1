import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.scss'],
})
export class EmployeeDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  updateEmployee() {
    setTimeout(() => {
      alert('Thêm nhân viên thành công');
    }, 1000);
  }
}
