import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { Field } from './field-base';
import { FieldsService } from './fields.service';


@Component({
  selector: 'rml-form',
  template: `
  <form (submit)="submit()" [formGroup]="form">
    <ng-content></ng-content>
  </form>
  `
})
export class FormComponent implements AfterViewInit, OnInit {

  @Output() submitForm = new EventEmitter();
  @Input() key: string;
  @Input() validator: ValidatorFn;
  public scrollOnValidation = true;
  public data: any;
  public fields: Field[] = [];
  public errorDelay = 800;
  public form: FormGroup;
  public error: string;
  @Input()
  public query: Observable<any>;

  get valid() { return this.form?.valid; }

  constructor(private fb: FormBuilder, private fx: FieldsService) {

    this.form = this.fb.group({});

  }

  ngOnInit() {

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

        const el = document.querySelector('.is-invalid, .invalid-feedback');
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
          this.fx.validateField(field, true);
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


}
