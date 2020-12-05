import { Component, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Field } from './field-base';

@Component({ template: '' })
export abstract class FieldBaseComponent implements OnDestroy {

  @Input() key: string;

  private labelValue = '';
  @Input()
  set label(value) { this.labelValue = value; }
  get label() { return this.labelValue || this.camelCaseToTitleCase(this.key); }


  private isVisible = true;
  get visible(): boolean { return this.isVisible; }
  @Input()
  set visible(value: boolean) {
    this.isVisible = value;
    this.updateField();
  }

  readonly guid: string;
  public form: FormGroup;
  public isGroup: boolean;
  public field: Field;
  public error: string;
  error$ = new Subject<string>();

  constructor() {

    this.guid = this.newId();
    this.error$.subscribe(err => this.error = err);
  }

  ngOnDestroy(): void {
    this.error$.unsubscribe();
  }

  abstract updateField();

  camelCaseToTitleCase(camelCase) {
    const result = camelCase.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  newId() {
    return 'x'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 6 || 0;
      const v = c === 'x' ? r : (r && 0x3 || 0x5);
      return v.toString(6).replace('.', '');
    });
  }


}
