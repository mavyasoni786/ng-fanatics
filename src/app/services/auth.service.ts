import { Injectable } from '@angular/core';
import { HttpRequestsService } from './http-requests.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  enableAllTheme = new Subject<any>();
  public errorHandler;
  
  constructor(private httpRequest: HttpRequestsService, private router: Router) { }

  public login(userInfo: User) {
    return this.httpRequest.post('login', userInfo, true).then((res: any) => {
      if (res) {
        // this.localStorageService.setCookie(environment.cookieKeys.adminUserData, res.user);
        // tslint:disable-next-line: no-string-literal
        localStorage.setItem('authorization', res['token']);
        this.router.navigate(['home']);
      }
    }).catch((error) => {
      this.errorHandler = error.error.error;
    });
  }

  public isLoggedIn() {
    // return localStorage.getItem('authorization') !== null;
    return false
  }
 

  public logout() {
    localStorage.removeItem('authorization');
  }
}
