import { Component, Optional, SkipSelf } from '@angular/core';
import { FieldGroupComponent, FormComponent } from '../base';
import { FieldNzBaseComponent } from './fieldNzBase.component';

@Component({
  selector: 'x-nz-field-radio',
  template: `
  <div [formGroup]="form" *ngIf="visible">
    <nz-form-item>
      <nz-form-control [nzSpan]="controlSpan" [nzOffset]="controlOffset" [nzErrorTip]="error"   >
        <label nz-radio  [formControlName]="key"  (nzCheckedChange)="valueChanges.emit($event)" [nzDisabled]="disabled" ><span>{{ label }}</span></label>
      </nz-form-control>
    </nz-form-item>
  </div>
  `
})
export class FieldNzRadioComponent extends FieldNzBaseComponent {

  constructor(
    @SkipSelf() formComponent: FormComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldGroupComponent) {
    super(formComponent, fieldGroupComponent);

  }


}
