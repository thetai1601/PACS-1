import { Injectable } from '@angular/core';
const TOKEN_KEY = 'token-key';
const TOKEN_REFRESH = 'token-refresh';
const USER_ID = 'user-id';
@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}
  signOut(): void {
    window.sessionStorage.clear();
  }
  // save Token
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  // save Token Refresh
  public saveTokenRefresh(token: string): void {
    window.sessionStorage.removeItem(TOKEN_REFRESH);
    window.sessionStorage.setItem(TOKEN_REFRESH, token);
  }
  public getRefreshToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_REFRESH);
  }
  // save User ID
  public saveUserId(token: string): void {
    window.sessionStorage.removeItem(USER_ID);
    window.sessionStorage.setItem(USER_ID, token);
  }
  public getUserId(): string | null {
    return window.sessionStorage.getItem(USER_ID);
  }

  // public saveUserId(user: any): void {
  //   window.sessionStorage.removeItem(USER_ID);
  //   window.sessionStorage.setItem(USER_ID, JSON.stringify(user));
  // }
  // public getUser(): any {
  //   const user = window.sessionStorage.getItem(USER_ID);
  //   if (user) {
  //     return JSON.parse(user);
  //   }
  //   return {};
  // }
}
