import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureStepperComponent } from './feature-stepper.component';

describe('FeatureStepperComponent', () => {
  let component: FeatureStepperComponent;
  let fixture: ComponentFixture<FeatureStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureStepperComponent]
    });
    fixture = TestBed.createComponent(FeatureStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
