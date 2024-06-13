import { Injectable } from '@angular/core';

import {
  Observable,
  of,
} from 'rxjs';

import { UserStateService } from '../../common';

@Injectable()
export class LoginService {

  constructor(
    // private authService: AuthService,
    private userStateService: UserStateService,
  ) { }

  exec(email: string, password: string): Observable<any> {
    return of();
    // return this.authService.authControllerLogin({
    //   email,
    //   password,
    // })
    // .pipe(
    //   map((response: any) => {
    //     return {
    //       id: response.id,
    //       email: response.email,
    //       name: response.name,
    //       role: response.role,
    //       loginStamp: response.loginStamp,
    //       firstName: response.firstName,
    //       lastName: response.lastName,
    //       idDocument: response.idDocument,
    //       roleText: USER_ROLES_VALUE[response.role]?.name
    //     };
    //   }),
    //   tap((user: UserStateVM) => {
    //     this.userStateService.setUser(user);
    //   })
    // );
  }
}
