import { Component,  Optional, SkipSelf } from '@angular/core';
import { FieldBsComponent } from '.';
import { FieldGroupComponent, FormComponent } from 'fieldx';

@Component({
  selector: 'fieldx-radio-list',
  template: `
  <div class="{{groupClass}}" [formGroup]="form" *ngIf="visible">
    <label  [ngClass]="{'required': required }" >{{label || key}}</label>
    <div class="">
      <div class="form-check  {{isInline ? 'form-check-inline': ''}}"  *ngFor="let o of options">
        <input class="form-check-input" type="radio" id="{{o.key + guid}}" [value]="o.key"  [formControlName]="key" checked="">
        <label class="form-check-label"  attr.for="{{o.key + guid}}">
          {{o.value}}
        </label>
      </div>
    </div>
    <span class="invalid-feedback {{error ? 'd-block': '' }}">{{error}}</span>
  </div>
  `
})
export class FieldBsRadioListComponent extends FieldBsComponent {


  constructor(
    @SkipSelf() formComponent: FormComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldGroupComponent) {
    super(formComponent, fieldGroupComponent);
    // this.isFormArray = true;
  }




}
