import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpFormDataClientComponent } from './http-form-data-client.component';

describe('HttpFormDataClientComponent', () => {
  let component: HttpFormDataClientComponent;
  let fixture: ComponentFixture<HttpFormDataClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpFormDataClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HttpFormDataClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
