// import { Component } from '@angular/core';
// import { ModelxComponent } from 'projects/fieldx/src/lib/model/modelx.component';


// @Component({
//   selector: 'modelx',
//   template: `
//     <ng-content *ngIf="listVisible" select="listx"></ng-content>
//     <div *ngIf="formVisible" [ngSwitch]="formViewer">
//       <nz-modal  *ngSwitchCase="'modal'" [(nzVisible)]="visible" nzTitle="title" (nzOnCancel)="cancel()" (nzOnOk)="ok()">
//         <ng-container *nzModalContent>
//         <ng-content select="formx"></ng-content>
//         </ng-container>
//       </nz-modal>
//       <nz-drawer *ngSwitchCase="'drawer'" [nzClosable]="closeable" [nzVisible]="visible" [nzPlacement]="placement" [nzWidth]="width" [nzTitle]="title"
//           (nzOnClose)="cancel()">
//           <ng-content select="formx"></ng-content>
//       </nz-drawer>
//       <div *ngSwitchDefault>
//         <ng-content select="formx"></ng-content>
//       </div>
//    </div>
//   `
// })
// export class ModelxNzComponent extends ModelxComponent {

//   title: string;
//   visible = false;
//   closeable = false;
//   placement: 'left' | 'right' = 'right';
//   width = 300;

//   constructor() {
//     super();

//   }


//   open(): void {
//     this.visible = true;
//   }

//   cancel(): void {
//     this.visible = false;
//   }

//   ok(): void{
//     this.visible = false;
//   }

// }
