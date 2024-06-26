import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Subscription } from 'rxjs';

import { StateService } from '../../common/state';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss'],
})
export class RecoveryPasswordComponent implements OnInit, OnDestroy {
  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private stateService: StateService
  ) {
    this.stateService.setLoading(true);
  }

  form!: FormGroup;
  submitDisable = true;
  loading = false;
  loginSuccess = false;
  private sub$ = new Subscription();

  ngOnInit(): void {
    this.createForm();
    setTimeout(() => this.stateService.setLoading(false), 1000);
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  getDataFromRecoveryPassword(): void {
    this.loading = true;
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      email: [
        null,
        [Validators.email, Validators.required, Validators.maxLength(256)],
      ],
    });
    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.submitDisable = !this.form.valid;
      })
    );
  }
}
