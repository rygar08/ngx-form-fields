import { Component, Input, Optional, SkipSelf } from '@angular/core';
import { FieldxFormComponent, FieldxGroupComponent } from 'fieldx';
import { FieldNzBaseComponent } from './fieldNzBase.component';



@Component({
  selector: 'fieldx-number',
  template: `
  <div [formGroup]="form" *ngIf="visible">
    <nz-form-item>
      <nz-form-label [nzSpan]="labelSpan" [attr.for]="guid" [nzRequired]="required">{{label || key}}</nz-form-label>
      <nz-form-control [nzSpan]="controlSpan" [nzOffset]="controlOffset" [nzErrorTip]="error" (nzOnOk)="valueChanges.emit($event)"  >
        <nz-input-number   style="width:100%"
            [nzMin]="min" [nzMax]="max" [nzStep]="step"
            [attr.readonly]="readonly?'':null" [id]="guid" (blur)="blur()" [formControlName]="key"
            ></nz-input-number>
      </nz-form-control>
    </nz-form-item>
  </div>
  `
})
export class FieldNzNumberComponent extends FieldNzBaseComponent {

  @Input() min : number = 0;
  @Input() max : number = 1000000;
  @Input() step : number = 1;
  @Input() formatter: (value: number) => string;
  @Input() parser : (value: string) => number;

  constructor(
    @SkipSelf() formComponent: FieldxFormComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldxGroupComponent) {
    super(formComponent, fieldGroupComponent);

  }



}
