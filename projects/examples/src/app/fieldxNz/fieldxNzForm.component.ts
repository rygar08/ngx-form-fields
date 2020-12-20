import { Component, OnInit  } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './fieldxNzForm.component.html'
})
export class FieldxNzFormComponent implements OnInit {


  query$: Observable<any>;
  paxValidator: any;
  showBrave = true;
  braveOptions = [];
  formVisible = false;
  formType = 'inline';

  checkOptionsOne = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear', checked: false },
    { label: 'Orange', value: 'Orange', checked: false }
  ];

  // component: componentViewer;

  constructor( ) {

    // this.query$ = this.qx.call(queryStr).pipe(
    //   map((result) => result?.data?.students[0]));
    this.braveOptions = [
      { key: 'solid', value: 'Solid' },
      { key: 'great', value: 'Great' },
      { key: 'good', value: 'Good' },
      { key: 'unproven', value: 'Unproven' }];

    // this.component = {
    //   closeable: true,
    //   component: TestComponent,
    //   data: { count: 20 },
    //   title: 'Hello world',
    //   type: 'drawer',
    //   width: 500
    // } as componentViewer;

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

  showForm(type) {
    // this.component.type = type;
    // this.mx.show(this.component);
  }

  onSubmit() {
    // if (this.validate()) {
    //   this.payLoad = JSON.stringify(this.form.getRawValue());
    // }
  }

  showBraveChange() {
    this.showBrave = !this.showBrave;
  }



}
