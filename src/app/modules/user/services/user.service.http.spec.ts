import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { User } from '../models/user.model';
import { BaseInterceptor } from '@core/base.interceptor';

describe('UserService', () => {

  let service: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true }
      ]
    });
    service = TestBed.get(UserService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
    const a = 1;
    const b = 2;
    const mO = { a, b };
    console.log(mO);

    // const sO = Object.keys(mO).map((k) => `${k}: ${mO[k]}`);
    const sO = Object.keys(mO).reduce((acc, curr) => { acc[curr] = String(mO[curr]); return acc }, {})
    console.log(sO);

  });

  it('should find one', async(() => {
    const user$ = service.findOne(1);
    user$.subscribe(u => {
      expect(u.name).toBe('Leanne Graham');
    });
  }));

  it('should add', async(() => {
    const user = {
      name: 'Tumit Watchara',
      username: 'tumit',
      website: 'tumit.xyz',
    } as User;
    const user$ = service.add(user);
    user$.subscribe(u => {
      expect(u.name).toBe('Tumit Watchara');
    });
  }));

});
