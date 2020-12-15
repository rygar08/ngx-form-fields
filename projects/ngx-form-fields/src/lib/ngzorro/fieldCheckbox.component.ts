import { Component, Input, Optional, SkipSelf } from '@angular/core';
import { FieldGroupComponent, FormComponent } from '../base';
import { FieldNzBaseComponent } from './fieldNzBase.component';

@Component({
  selector: 'x-nz-field-checkbox',
  template: `
  <div [formGroup]="form" *ngIf="visible">
    <nz-form-item>
      <nz-form-label [nzSpan]="labelSpan" [attr.for]="guid" [nzRequired]="required">{{label || key}}</nz-form-label>
      <nz-form-control [nzSpan]="controlSpan" [nzOffset]="controlOffset" [nzErrorTip]="error"   >
        <label nz-checkbox [formControlName]="key"  (nzCheckedChange)="valueChanges.emit($event)" [nzDisabled]="disabled"   >
          <span>{{ label }}</span>
        </label>
      </nz-form-control>
    </nz-form-item>
  </div>
  `
})
export class FieldNzCheckboxComponent extends FieldNzBaseComponent {


  @Input() options: { key: string, value: string }[] = [];

  constructor(
    @SkipSelf() formComponent: FormComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldGroupComponent ) {
    super(formComponent, fieldGroupComponent );

  }


}
