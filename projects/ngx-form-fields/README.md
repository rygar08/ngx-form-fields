# Example of Form Feilds

    @Component({
      template: `
        <rml-form #appFrom (submitForm)="onSubmit($event)" class="container" [query="query$">

          <!--  Standard form input types -->
          <rml-field type="text" key="id" disabled="true"></rml-field>
          <rml-field type="textarea" key="notes" label="Notes" required></rml-field>

          <!--  Create Custom field template -->
          <app-custom-field type="select" key="firstName" ></app-custom-field>

          <!--  Group validation -->
          <rml-field-group key="pax" [validator]="paxValidator">
            <rml-field type="email" key="emailAddress" required></rml-field>
            <rml-field type="email" key="emailAddressConfirm" required></rml-field>
          </rml-field-group>

          <!--  Show/Hide visiblity of fields -->
          <rml-field type="select" key="brave" [options]="braveOptions" required  [visible]="showBrave" ></rml-field>
          <rml-field type="checkbox" key="showBrave" (valueChanges)="showBraveChange($event)" ></rml-field>

          <div class="alert alert-danger" *ngIf="appFrom.error">{{appFrom.error}} </div>

          <div class="form-row">
            <button type="submit" class="btn btn-primary {{appFrom.valid  ? '': 'is-invalid'}}"
              (click)="appFrom.submit()">Save</button>
          </div>

        </rml-form>
      `,
    })
    export class StudentComponent implements OnInit {

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

## Example of Custom Field Component

    @Component({
      selector: 'app-custom-field',
      template: `
      <div class="{{groupClass}}" [formGroup]="form" *ngIf="visible">
        <label [ngClass]="{'required': required }" [attr.for]="guid">{{label}}</label>

        <!-- you could put in a switchcase for multiple field types here -->
        <input class="{{inputClass}}" [formControlName]="key"
          [ngClass]="{'is-invalid': error }" [attr.readOnly]="readonly?'':null" [attr.disabled]="disabled?'':null"
          (blur)="blur()" [id]="guid" type="text" placeholder="{{placeHolder || label}}">

        <span class="invalid-feedback {{error ? 'd-block': '' }}">{{error}}</span>
      </div>
      `
    })
    export class MyFieldComponent extends FieldComponent {

      constructor(
        @SkipSelf() formComponent: FormComponent,
        @Optional() @SkipSelf() fieldGroupComponent: FieldGroupComponent) {
        super(formComponent, fieldGroupComponent);
      }

    }

## Using Custom component

    <rml-form #appFrom (submitForm)="onSubmit($event)" class="container" [query]="query$">

      <!-- Using custom component -->
      <app-custom-field type="text" key="firstName"  ></app-custom-field>

    </rml-form>
