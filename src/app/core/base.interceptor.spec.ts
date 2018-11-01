import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { BaseInterceptor } from '@core/base.interceptor';
import { environment } from '@env/environment';

describe('UserService', () => {

  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpClient,
        { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true }
      ]
    });
    httpClient = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should call local path', () => {
    httpClient.get<any>('./path').subscribe();
    httpMock.expectOne('./path');
    httpMock.verify();
  });

  it('should concat api url with path', () => {
    httpClient.get<any>('/path').subscribe();
    httpMock.expectOne(`${environment.apiUrl}/path`);
    httpMock.verify();
  });

  it('should concat api url with slash and path', () => {
    httpClient.get<any>('path').subscribe();
    httpMock.expectOne(`${environment.apiUrl}/path`);
    httpMock.verify();
  });

});
