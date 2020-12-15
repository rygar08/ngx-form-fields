import { Component, Input, Optional, SkipSelf } from '@angular/core';
import { FieldxFormComponent, FieldxGroupComponent, FieldxComponent } from 'fieldx';

@Component({
  selector: 'fieldx',
  styleUrls: ['./field.component.scss'],
  templateUrl: './field.component.html'
})
export class FieldBsComponent extends FieldxComponent {


  @Input() inputClass = 'form-control';
  @Input() groupClass = 'form-group';

  constructor(
    @SkipSelf() formComponent: FieldxFormComponent,
    @Optional() @SkipSelf() fieldGroupComponent: FieldxGroupComponent) {
    super(formComponent, fieldGroupComponent);
  }




}
