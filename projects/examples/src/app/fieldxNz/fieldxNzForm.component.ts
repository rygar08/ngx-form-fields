import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { TestComponent } from './test.component';

@Component({
  templateUrl: './fieldxNzForm.component.html'
})
export class FieldxNzFormComponent implements OnInit {


  @ViewChild("formContainer", { read: ViewContainerRef }) formContainerRef;
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

  constructor(
    private resolver: ComponentFactoryResolver) {

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

  showForm(type) {
    this.formType = type;
    this.formVisible = !this.formVisible;
  }

  onSubmit(value) {
    // if (this.validate()) {
    //   this.payLoad = JSON.stringify(this.form.getRawValue());
    // }
  }

  showBraveChange(value) {
    this.showBrave = !this.showBrave;
  }



  loadComponent() {
    const componentFactory = this.resolver.resolveComponentFactory(TestComponent);

    this.formContainerRef.clear();

    const componentRef = this.formContainerRef.createComponent(componentFactory);
    componentRef.instance.count = 2;
  }


}
