import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSdkComponent } from './dashboard-sdk.component';

describe('DashboardSdkComponent', () => {
  let component: DashboardSdkComponent;
  let fixture: ComponentFixture<DashboardSdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSdkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardSdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
