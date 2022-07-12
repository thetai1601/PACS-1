// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {

//   constructor() { }

// }


import { AuthService } from '../../../core/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private route: Router,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('username', this.loginForm.get('username')?.value);
    formData.append('password', this.loginForm.get('password')?.value);
    // if (this.loginForm.valid) {
    //   this.service.proceedLogin(formData).subscribe((res) => {
    //     this.responseData = res;
    //     localStorage.setItem('IBME-', this.responseData.access_token);
    //     localStorage.setItem('userId', this.responseData.id);
    //     this.route.navigate(['/register']);
    //   });
    // }

    this.service.login(formData).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.access_token);
        this.tokenStorage.saveTokenRefresh(data.refresh_token);
        this.tokenStorage.saveUserId(data.id);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.route.navigate(['/dashboard'])
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      },
    });
  }
}
