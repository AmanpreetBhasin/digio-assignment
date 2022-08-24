import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadhaarValidationComponent } from './aadhaar-validation.component';

describe('AadhaarValidationComponent', () => {
  let component: AadhaarValidationComponent;
  let fixture: ComponentFixture<AadhaarValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AadhaarValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AadhaarValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
