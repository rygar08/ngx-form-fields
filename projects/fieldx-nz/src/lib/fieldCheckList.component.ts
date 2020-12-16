import { Component, Optional, SkipSelf } from '@angular/core';
import { FormxComponent, FormxFieldGroupComponent } from 'fieldx';
import { FieldNzBaseComponent } from './fieldNzBase.component';

@Component({
  selector: 'fieldx-check-list',
  template: `
  <div [formGroup]="form" *ngIf="visible">
    <nz-form-item>
      <nz-form-label *ngIf="hideLabel" [nzSpan]="labelSpan" [attr.for]="guid" [nzRequired]="required">{{label || key}}</nz-form-label>
      <nz-form-control [nzSpan]="controlSpan" [nzOffset]="controlOffset" [nzErrorTip]="error"   >
        <nz-checkbox-group [formControlName]="key" (ngModelChange)="valueChanges.emit($event)"></nz-checkbox-group>
      </nz-form-control>
    </nz-form-item>
  </div>
  `
})
export class FieldNzCheckListComponent extends FieldNzBaseComponent {



  constructor(
    @SkipSelf() formComponent: FormxComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FormxFieldGroupComponent) {
    super(formComponent, fieldGroupComponent);

  }




}
