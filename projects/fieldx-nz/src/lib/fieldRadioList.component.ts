import { Component, Optional, SkipSelf } from '@angular/core';
import { FormxComponent, FormxFieldGroupComponent } from 'fieldx';
import { FieldNzBaseComponent } from './fieldNzBase.component';

@Component({
  selector: 'fieldx-radio-list',
  styles: [
    `
      .vertical label {
        display: block;
        height: 32px;
        line-height: 32px;
      }
    `
  ],
  template: `
  <div [formGroup]="form" *ngIf="visible">
    <nz-form-item>
      <nz-form-label *ngIf="hideLabel" [nzSpan]="labelSpan" [attr.for]="guid" [nzRequired]="required">{{label || key}}</nz-form-label>
      <nz-form-control [nzSpan]="controlSpan" [nzOffset]="controlOffset" [nzErrorTip]="error"   >
        <nz-radio-group class="{{isInline ? 'vertical': ''}}" [nzName]="key" [formControlName]="key"  >
          <label nz-radio nzValue="{{o.key}}" id="{{o.key + guid}}"  *ngFor="let o of options" >{{o.value}}</label>
        </nz-radio-group>
      </nz-form-control>
    </nz-form-item>
  </div>
  `
})
export class FieldNzRadioListComponent extends FieldNzBaseComponent  {

  constructor(
    @SkipSelf() formComponent: FormxComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FormxFieldGroupComponent) {
    super(formComponent, fieldGroupComponent);

  }



}
