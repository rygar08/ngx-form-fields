import { AfterViewInit, Component, Input, OnInit, Optional, SkipSelf, TemplateRef } from '@angular/core';
import { FormxComponent, FormxFieldGroupComponent } from 'fieldx';
import { FieldNzBaseComponent } from './fieldNzBase.component';

@Component({
  selector: 'fieldx',
  template: `
  <div [formGroup]="form" *ngIf="visible" >
    <nz-form-item   >
      <nz-form-label [nzSpan]="labelSpan" [nzFor]="guid" [nzRequired]="required">{{label || key}}</nz-form-label>
      <nz-form-control [nzSpan]="controlSpan" [nzOffset]="controlOffset" (ngModelChange)="valueChanges.emit($event)"
        [nzErrorTip]="error" nzValidatingTip="Validating...">
        <div [ngSwitch]="type">

          <textarea *ngSwitchCase="'textarea'" nz-input [placeholder]="placeHolder"
            [nzAutosize]="{ minRows: 3, maxRows: 5 }"  placeholder="{{placeHolder || label}}" [attr.readonly]="readonly?'':null"
            [id]="guid" (blur)="blur()" [formControlName]="key"></textarea>

          <nz-input-group *ngSwitchDefault  [nzAddOnBefore]="prefix"  [nzAddOnAfter]="suffix">
            <input [type]="type" [attr.readonly]="readonly?'':null" (blur)="blur()" [id]="guid" nz-input [formControlName]="key"

              placeholder="{{placeHolder || label}}" />
          </nz-input-group>

        </div>

      </nz-form-control>
    </nz-form-item>
  </div>
  `
})
export class FieldNzInputComponent extends FieldNzBaseComponent implements OnInit, AfterViewInit {

  @Input() prefix?: string | TemplateRef<void>;
  @Input() suffix?: string | TemplateRef<void>;

  constructor(
    @SkipSelf() formComponent: FormxComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FormxFieldGroupComponent) {
    super(formComponent, fieldGroupComponent);
  }


}
