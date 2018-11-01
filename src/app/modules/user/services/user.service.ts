import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<User> {
    return this.http.get<User>(`/users/${id}`);
  }

  findOneWithType(id: number): Observable<User> {
    return this.http.get<User>(`/users/${id}`);
  }

  add(user: User): Observable<User> {
    return this.http.post<User>(`/users`, user);
  }

}
