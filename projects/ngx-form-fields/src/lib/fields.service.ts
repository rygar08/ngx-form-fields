import { Injectable } from '@angular/core';
import { Field } from './field-base';

@Injectable({
  providedIn: 'root'
})
export class FieldsService {

  constructor() { }


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
