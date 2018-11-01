import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { BaseInterceptor } from '@core/base.interceptor';
import { environment } from '@env/environment';
import { UserService } from './user.service';

describe('UserService', () => {

  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true }
      ]
    });
    service = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should find one', () => {

    service.findOne(1).subscribe(u => expect(u).toBeTruthy());

    const http = httpMock.expectOne(`${environment.apiUrl}/users/1`);
    expect(http.request.method).toEqual('GET');

    const data = {
      id: 999,
      name: 'Tom Riddle',
      username: 'tom',
      website: 'tom.riddle.zyx',
      email: 'tom@riddle.zyx',
      phone: '66555555555'
    };
    const opts = { status: 200, statusText: 'OK' };

    http.flush(data, opts);

    httpMock.verify();
  });
});
