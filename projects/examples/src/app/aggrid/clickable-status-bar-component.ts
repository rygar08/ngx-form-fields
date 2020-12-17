import { Component } from '@angular/core';



@Component({
  selector: 'status-component',
  template: `
    <div class="container" *ngIf="visible">
      <div>
        <span class="component"
          >Status Bar Component
          <input type="button" (click)="onClick()" value="Click Me"
        /></span>
      </div>
    </div>
  `,
})
export class ClickableStatusBarComponent {
  params: any;
  visible = true;

  agInit(params: any): void {
    this.params = params;
  }

  onClick(): void {
    alert('Selected Row Count: ' + this.params.api.getSelectedRows().length);
  }

  setVisible(visible: boolean) {
    this.visible = visible;
  }

  isVisible(): boolean {
    return this.visible;
  }
}
