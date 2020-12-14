import { AfterViewInit, Component, OnInit, Optional, SkipSelf } from '@angular/core';
import { FieldGroupComponent, FormComponent } from '../base';
import { FieldNzBaseComponent } from './fieldNzBase.component';

@Component({
  selector: 'x-nz-field',
  template: `
  <div [formGroup]="form" *ngIf="visible">
    <nz-form-item>
      <nz-form-label [nzSpan]="labelSpan" [nzFor]="guid" [nzRequired]="required">{{label || key}}</nz-form-label>
      <nz-form-control [nzSpan]="controlSpan" [nzOffset]="controlOffset" (ngModelChange)="valueChanges.emit($event)"
        [nzErrorTip]="error" nzValidatingTip="Validating...">
        <nz-input-group nzPrefix="prefix" *ngIf="prefix">
          <input [type]="type" [attr.readOnly]="readonly?'':null" (blur)="blur()" [id]="guid" nz-input [formControlName]="key"
            placeholder="{{placeHolder || label}}" />
        </nz-input-group>
        <input *ngIf="!prefix"  [type]="type" [attr.readOnly]="readonly?'':null" (blur)="blur()" [id]="guid" nz-input [formControlName]="key"
          placeholder="{{placeHolder || label}}" />
      </nz-form-control>
    </nz-form-item>
  </div>
  `
})
export class FieldNzInputComponent extends FieldNzBaseComponent implements OnInit, AfterViewInit {


  constructor(
    @SkipSelf() formComponent: FormComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldGroupComponent) {
    super(formComponent, fieldGroupComponent);
  }


}
