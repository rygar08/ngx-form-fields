import { Component, EventEmitter, Input, Optional, Output, SkipSelf } from '@angular/core';
import { FieldxFormComponent, FieldxGroupComponent } from 'fieldx';
import { FieldNzBaseComponent } from './fieldNzBase.component';
// import getISOWeek from 'date-fns/getISOWeek';
import { en_US, NzI18nService  } from 'ng-zorro-antd/i18n';



@Component({
  selector: 'fieldx-time',
  template: `
  <div [formGroup]="form" *ngIf="visible">
    <nz-form-item>
      <nz-form-label [nzSpan]="labelSpan" [attr.for]="guid" [nzRequired]="required">{{label || key}}</nz-form-label>
      <nz-form-control [nzSpan]="controlSpan" [nzOffset]="controlOffset" [nzErrorTip]="error" (nzOnOk)="valueChanges.emit($event)"  >
        <nz-time-picker [nzPlaceHolder]="placeHolder" [nzFormat]="dateFormat" [nzMinuteStep]="minuteStep" [nzDisabled]="!disabled" [formControlName]="key"
        (nzOpenChange)="OpenChange.emit($event)"  (blur)="blur()"  ></nz-time-picker>
      </nz-form-control>
    </nz-form-item>
  </div>
  `
})
export class FieldNzTimeComponent extends FieldNzBaseComponent {

  @Output() OpenChange = new EventEmitter<boolean>();
  @Input() locale: 'zh_CN' | 'en_AU' | 'en_US' = 'en_AU';
  @Input() dateFormat = 'HH:mm';
  @Input() minuteStep = 5;

  constructor(
    private i18n: NzI18nService,
    @SkipSelf() formComponent: FieldxFormComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldxGroupComponent) {
    super(formComponent, fieldGroupComponent);
    // registerLocaleData(en);
     this.i18n.setLocale(en_US);
  }



}
