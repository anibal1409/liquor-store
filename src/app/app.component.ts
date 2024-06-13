import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  loading = true;
  private sub$ = new Subscription();

  constructor(
    // private stateService: StateService,
    // private cdRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    // this.sub$.add(
    //   this.stateService.getLoading$().subscribe((loading) => {
    //     this.loading = loading;
    //     this.cdRef.detectChanges();
    //   })
    // );
    // return;
  }
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
