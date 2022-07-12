import { DepartmentService } from './../../../core/service/department.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss'],
})
export class AddDepartmentComponent implements OnInit {
  departmentForm!: FormGroup;
  constructor(
    private departmentService: DepartmentService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.departmentForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    });
  }

  onSubmit() {
    if (this.departmentForm.value) {
      this.departmentService
        .addDepartment(this.departmentForm.value)
        .subscribe((res) => {
          alert(res.message);
        });
    }
  }
}
