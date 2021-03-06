import { Component, OnInit, } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { ValidatorOption } from 'fieldx';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './fieldxBs.component.html',
})
export class FieldxBsExampleComponent implements OnInit {

  query$: Observable<any>;
  paxValidator: ValidatorOption;
  showBrave = true;
  braveOptions = [];

  constructor() {

    // this.query$ = this.qx.call(queryStr).pipe(
    //   map((result) => result?.data?.students[0]));
    this.braveOptions = [
      { key: 'solid', value: 'Solid' },
      { key: 'great', value: 'Great' },
      { key: 'good', value: 'Good' },
      { key: 'unproven', value: 'Unproven' }];

  }

  ngOnInit(): void {

    this.paxValidator = {
      key: 'emailCompare',
      validator: (c: FormGroup): ValidationErrors | null => {
        const e1 = c.get('emailAddress').value || '';
        const e2 = c.get('emailAddressConfirm').value || '';
        if (e1 === '' || e2 === '') { return null; }
        if (e1 !== e2) { return { error: true }; }
        return null;
      },
      error: ' Emails to not match.'
    };

  }



  onSubmit(value) {
    // if (this.validate()) {
    //   this.payLoad = JSON.stringify(this.form.getRawValue());
    // }
  }

  showBraveChange(value) {
    this.showBrave = !this.showBrave;
  }

}
