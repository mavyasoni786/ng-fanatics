import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestsService {

  public hostUrl = environment.API_URL;

  constructor(
    public http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) { }

  getHeader(headerOptions, doNotSendAuthorizationParam) {
    const headerParams = {};

    if (doNotSendAuthorizationParam !== true) {
      // tslint:disable-next-line: no-string-literal
      headerParams['authorization'] = localStorage.getItem('authorization');
    }
    if (headerOptions) {
      Object.assign(headerParams, headerOptions);
    }
    const headers = new HttpHeaders(headerParams);
    return { headers };
  }

  post(
    url: string,
    body: any,
    doNotSendAuthorizationParam: boolean = false,
    headerOptions: any = {},
  ) {
    return new Promise((resolve, reject) => {
      const options = this.getHeader(headerOptions, doNotSendAuthorizationParam);
      this.http.post(`${this.hostUrl}${url}`, body, options).pipe(map((res) => {
        return res;
      })).subscribe((res) => {
        resolve(res);
      }, (err) => {
        this.handleError(err);
        reject(err);
      });
    });
  }

  get(url: string, doNotSendAuthorizationParam: boolean = false, headerOptions: any = {}) {
    return new Promise((resolve, reject) => {
      const options = this.getHeader(headerOptions, doNotSendAuthorizationParam);
      this.http.get(`${this.hostUrl}${url}`, options).pipe(map((res) => {
        return res;
      }))
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          this.handleError(err);
          reject(err);
        });
    });
  }

  put(url, body: any, headerOptions: any = {}, doNotSendAuthorizationParam: boolean = false) {
    return new Promise((resolve, reject) => {
      const options = this.getHeader(headerOptions, doNotSendAuthorizationParam);
      this.http.put(`${this.hostUrl}${url}`, body, options).pipe(map((res) => {
        return res;
      })).subscribe((res) => {
        resolve(res);
      }, (err) => {
        this.handleError(err);
        reject(err);
      });
    });
  }

  delete(url, headerOptions: any = {}, doNotSendAuthorizationParam: boolean = false) {
    return new Promise((resolve, reject) => {
      const options = this.getHeader(headerOptions, doNotSendAuthorizationParam);
      this.http.get(`${this.hostUrl}${url}`, options).pipe(map((res) => {
        return res;
      }))
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          this.handleError(err);
          reject(err);
        });
    });
  }

  getCsv(
    url: string,
    body: any,
    doNotSendAuthorizationParam: boolean = false,
    headerOptions: any = {},
  ) {
    return new Promise((resolve, reject) => {
      const options = this.getHeader(headerOptions, doNotSendAuthorizationParam);
      options['responseType'] = 'text';
      this.http.post(`${this.hostUrl}${url}`, body, options).toPromise().then((res: any) => {
        resolve(res);
        const fileName = 'report.csv';
        const blob = new Blob([res], { type: 'text/plain;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${fileName}`);
        document.body.appendChild(link);
        link.click();
      }).catch((err) => {
        this.handleError(err);
        reject(err);
      });
    });
  }

  handleError(err) {
    if (err.status === 400) {
      this.toastr.error(err.error.error, 'Error');
      this.spinner.hide();
    } else if (err.status === 401) {
      this.toastr.error(err.error.error, 'Error');
      this.spinner.hide();
      localStorage.removeItem('authorization');
      this.router.navigate(['/login']);
    } else if (err.status === 500) {
      this.toastr.error(err.error.error, 'Error');
      this.spinner.hide();
    } else if (err.status === 0) {
      this.toastr.error(err.message, 'Error');
      this.toastr.error('No internet connection or very weak signal', 'Error');
      this.spinner.hide();
    }
  }
}
