import { Component, Input, Optional, SkipSelf } from '@angular/core';
import { FormxComponent, FormxFieldGroupComponent } from 'fieldx';
import { FieldNzBaseComponent } from './fieldNzBase.component';

@Component({
  selector: 'fieldx-select',
  template: `

  <div [formGroup]="form" *ngIf="visible">
    <nz-form-item>
      <nz-form-label [nzSpan]="labelSpan" [nzFor]="guid" [nzRequired]="required">{{label || key}}</nz-form-label>
      <nz-form-control [nzSpan]="controlSpan" [nzOffset]="controlOffset" [nzErrorTip]="error" (ngModelChange)="valueChanges.emit($event)"  >
        <nz-select  [nzDisabled]="disabled"
          id="{{guid}}" (blur)="blur()"
          [formControlName]="key"
          [nzPlaceHolder]="placeHolder"  >
          <nz-option nzValue="{{i.key}}" nzLabel="{{i.value}}" *ngFor="let i of options"></nz-option>
        </nz-select>
      </nz-form-control>
    </nz-form-item>
  </div>
  `
})
export class FieldNzSelectComponent extends FieldNzBaseComponent {

  @Input() options: { key: string, value: string }[] = [];

  constructor(
    @SkipSelf() formComponent: FormxComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FormxFieldGroupComponent) {
    super(formComponent, fieldGroupComponent );

  }


}
