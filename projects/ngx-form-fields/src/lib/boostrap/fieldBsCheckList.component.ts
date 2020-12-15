import { Component, Input, Optional, SkipSelf } from '@angular/core';
import { FormArray, } from '@angular/forms';
import { FieldBsComponent } from '.';
import { FieldGroupComponent, FormComponent } from '../base';

@Component({
  selector: 'x-bs-field-check-list',
  template: `
  <div class="{{groupClass}}" [formGroup]="form" *ngIf="visible">

    <label [ngClass]="{'required': required }" >{{label || key}}</label>
    <div class="">
      <div [formArrayName]="key" class="form-check {{isInline ? 'form-check-inline': ''}}" *ngFor="let o of options; let i = index">
        <input class="form-check-input" type="checkbox" id="{{o.key + guid}}" [formControlName]="i">
        <label class="form-check-label"  attr.for="{{o.key + guid}}" >{{o.value}}</label>
      </div>
    </div>

    <span class="invalid-feedback {{error ? 'd-block': '' }}">{{error}}</span>
  </div>
  `
})
export class FieldBsCheckListComponent extends FieldBsComponent {


  get formArray() {
    return this.control as FormArray;
  }

  constructor(
    @SkipSelf() formComponent: FormComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldGroupComponent) {
    super(formComponent, fieldGroupComponent);
    this.isFormArray = true;
  }




}
