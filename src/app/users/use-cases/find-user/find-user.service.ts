import { Injectable } from '@angular/core';

import {
  Observable,
  of,
} from 'rxjs';

import {
  BaseQuery,
  UseCase,
} from '../../../common/memory-repository';
import { UserItemVM } from '../../model';

@Injectable()
export class FindUserService
  implements UseCase<UserItemVM | null, BaseQuery>
{
  constructor(
    // private entityServices: UsersService
  ) { }

  exec(data: BaseQuery): Observable<UserItemVM> {
    return of();
    // return this.entityServices
    //   .usersControllerFindOne(data?.id || 0)
    //   .pipe(map(User2UserVM));
  }
}
