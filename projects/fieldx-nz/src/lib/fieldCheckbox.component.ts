import { Component, OnInit, Optional, SkipSelf } from '@angular/core';
import { FieldGroupComponent, FormComponent } from 'fieldx';
import { FieldNzBaseComponent } from './fieldNzBase.component';

@Component({
  selector: 'fieldx-checkbox',
  template: `
  <div [formGroup]="form" *ngIf="visible">
    <nz-form-item>
      <nz-form-label *ngIf="hideLabel" [nzSpan]="labelSpan" [attr.for]="guid" [nzRequired]="required">{{label || key}}</nz-form-label>
      <nz-form-control [nzSpan]="controlSpan" [nzOffset]="controlOffset" [nzErrorTip]="error"   >
        <label nz-checkbox [formControlName]="key"  (nzCheckedChange)="valueChanges.emit($event)" [nzDisabled]="disabled"   >
          <span>{{ label }}</span>
        </label>
      </nz-form-control>
    </nz-form-item>
  </div>
  `
})
export class FieldNzCheckboxComponent extends FieldNzBaseComponent implements OnInit {

  constructor(
    @SkipSelf() formComponent: FormComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldGroupComponent ) {
    super(formComponent, fieldGroupComponent );

  }

  ngOnInit(): void{
    super.ngOnInit();

    this.hideLabel = this.hideLabel === undefined ? true: this.hideLabel;
  }


}
