import { Injectable } from '@angular/core';

import {
  Observable,
  of,
} from 'rxjs';

import { UseCase } from '../../../common/memory-repository';
import { UserMemoryService } from '../../memory';
import { UserItemVM } from '../../model/user-item-vm';
import { UserVM } from '../../model/users-vm';

@Injectable()
export class CreateUserService
  implements UseCase<UserItemVM, UserVM>
{
  constructor(
    // private entityServices: UsersService,
    private memoryService: UserMemoryService,
  ) { }

  exec(entitySave: UserVM): Observable<UserItemVM> {
    return of();
    // return this.entityServices
    //   .usersControllerCreate({
    //     birthdate: entitySave.birthdate,
    //     email: entitySave.email,
    //     firstName: entitySave.firstName,
    //     lastName: entitySave.lastName,
    //     idDocument: entitySave.idDocument,
    //     role: entitySave.role,
    //     status: entitySave.status,
    //     patient: {id: entitySave.patientId},
    //   }
    //   )
    //   .pipe(
    //     map(User2UserItemVM),
    //     tap((entity) => {
    //       this.memoryService.create(entity);
    //     })
    //   );
  }
}
