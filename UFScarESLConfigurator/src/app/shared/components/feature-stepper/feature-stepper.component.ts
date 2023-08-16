import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feature-stepper',
  templateUrl: './feature-stepper.component.html',
  styleUrls: ['./feature-stepper.component.sass']
})
export class FeatureStepperComponent {
  @Input() featureForm!: FormGroup;
}
