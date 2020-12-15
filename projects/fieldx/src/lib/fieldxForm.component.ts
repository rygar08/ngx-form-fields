import { Component, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { Field } from './field-base';


@Component({
  selector: 'fieldx-form',
  template: `
  <form (submit)="submit()" [formGroup]="form">
    <ng-content></ng-content>
  </form>
  `
})
export class FieldxFormComponent implements AfterViewInit {

  @Output() submitForm = new EventEmitter();
  @Input() validator: ValidatorFn;
  @Input() scrollOnValidation = true;
  @Input() errorDelay = 800;
  @Input() query: Observable<any>;
  public data: any;
  public fields: Field[] = [];
  public form: FormGroup;
  public error: string;

  get valid() { return this.form?.valid; }

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({});

  }


  ngAfterViewInit(): void {

    this.loadQuery();

    this.form?.valueChanges.subscribe(() => {
      if (this.form.valid) { this.error = null; }
    });

  }

  loadQuery() {
    if (this.query) {
      this.query.subscribe((data) => {
        this.data = data;
        this.setValues(this.fields);
      });
    }
  }



  submit() {
    const isValid = this.validate();
    this.submitForm.emit(isValid);
  }


  public validate(): boolean {
    this.error = '';
    if (this.form.valid) {
      return true;
    }
    this.processErrors(this.fields);
    this.scrollToError();
    return false;
  }

  scrollToError(): void {
    if (this.scrollOnValidation) {
      setTimeout(() => {

        const el = document.querySelector('.ng-invalid, .invalid-feedback');
        if (el) {
          const offset = el.getBoundingClientRect();
          window.scrollBy({
            top: offset.top - 150,
            left: 0,
            behavior: 'smooth'
          });
        }
      }, 100);
    }

  }

  setValues(fields: any) {

    if (fields && this.data) {
      fields.forEach((field: Field) => {
        if (field.isGroup) {
          this.setValues(field.fields);
        } else {
          if (this.data[field.key]) {
            field.control.setValue(this.data[field.key]);
          }
        }
      });
    }

  }

  processErrors(fields: Field[]) {
    if (fields) {
      fields.forEach((field: Field) => {
        if (field.isGroup) {
          this.processErrors(field.fields);
        } else {
          this.validateField(field, true);
        }
      });
    }
  }


  addField(field: Field) {
    this.fields.push(field);
  }

  removeField(field: Field) {
    this.fields = this.fields.filter(f => f.guid !== field.guid);
  }


  validateField(field: Field, showallError?: boolean) {
    let error = '';
    const c = field.control;
    const invalid = showallError ? c.errors : (c.dirty || c.touched) && c.errors;
    if (invalid) {
      Object.keys(c.errors).map(errorkey => {
        if (errorkey === 'required') {
          error = `${field.label} is required`;
          return;
        }
        if (errorkey === 'email') {
          error = `Please enter a valid email`;
          return;
        }
        if (field.validators?.length > 0) {
          const validator = field.validators.find(t => t.key === errorkey);
          if (validator) {
            error = validator.error + ' ';
          }
        }
      });
    }
    field.error$.next(error);
  }


}
