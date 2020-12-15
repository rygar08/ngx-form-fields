import { Component, EventEmitter, Input, Optional, Output, SkipSelf } from '@angular/core';
import { FieldxGroupComponent, FieldxFormComponent } from 'fieldx';
import { FieldNzBaseComponent } from './fieldNzBase.component';
// import getISOWeek from 'date-fns/getISOWeek';
import { en_US, NzI18nService  } from 'ng-zorro-antd/i18n';



@Component({
  selector: 'fieldx-date',
  template: `
  <div [formGroup]="form" *ngIf="visible">
    <nz-form-item>
      <nz-form-label [nzSpan]="labelSpan" [attr.for]="guid" [nzRequired]="required">{{label || key}}</nz-form-label>
      <nz-form-control [nzSpan]="controlSpan" [nzOffset]="controlOffset" [nzErrorTip]="error" (nzOnOk)="valueChanges.emit($event)"  >
        <nz-date-picker (blur)="blur()" [nzRenderExtraFooter]="footer" [nzDisabledDate]="disabledDates" [nzFormat]="dateFormat" [nzDisabled]="!disabled"
                    [nzInputReadOnly]="readonly" [nzShowTime]="showTime" [formControlName]="key"></nz-date-picker>
      </nz-form-control>
    </nz-form-item>
  </div>
  `
})
export class FieldNzDateComponent extends FieldNzBaseComponent {

  @Output() OpenChange = new EventEmitter<Date | null>();
  @Input() showTime = false;
  @Input() mode: 'Date' | 'Week' | 'Month' | 'Year' = 'Date'
  @Input() locale: 'zh_CN' | 'en_AU' | 'en_US' = 'en_AU';
  @Input() dateFormat = 'dd/MM/yyyy';
  @Input() startDate: Date | null = null;
  @Input() endDate: Date | null = null;
  @Input() footer : string;
  @Input() header : string;
  @Input() futureDatesOnly = false;

  constructor(
    private i18n: NzI18nService,
    @SkipSelf() formComponent: FieldxFormComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldxGroupComponent) {
    super(formComponent, fieldGroupComponent);
    // registerLocaleData(en);
     this.i18n.setLocale(en_US);
  }

  disabledDates = (value: Date): boolean => {
    if(!value && this.futureDatesOnly){
      const today = new Date();
      return value.getTime() <= today.getDate();
    }

    if (!value && !this.startDate) {
      return value.getTime() <= this.startDate.getTime();
    }
    if (!value && !this.endDate) {
      return value.getTime() > this.endDate.getTime();
    }

    return false;
  };



}
