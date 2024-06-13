import { Injectable } from '@angular/core';

import {
  Observable,
  of,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import { UserMemoryService } from '../../memory';

@Injectable()
export class DeleteUserService implements UseCase<number, number> {
  constructor(
    // private entityServices: UsersService,
    private memoryService: UserMemoryService,
  ) { }

  exec(id: number): Observable<number> {
    return of();
    // return this.entityServices.usersControllerRemove(id).pipe(
    //   map(() => 1),
    //   tap(() => {
    //     this.memoryService.delete(id);
    //   })
    // );
  }
}
