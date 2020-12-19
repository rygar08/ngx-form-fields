import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'modalx',
  template: `
  <ng-container *ngIf="visible" [ngSwitch]="type">
    <nz-modal *ngSwitchCase="'modal'" nzVisible="true" nzTitle="title"
        [nzTitle]="title" [nzContent]="content" [nzFooter]="footer" (nzOnCancel)="cancel()" (nzOnOk)="ok()">
    </nz-modal>
    <nz-drawer *ngSwitchCase="'drawer'" [nzClosable]="closeable" nzVisible="true" [nzPlacement]="placement"
      [nzWidth]="width" [nzTitle]="title" (nzOnClose)="cancel()"
      [nzTitle]="title" [nzContent]="content" [nzFooter]="footer">
    </nz-drawer>
    <ng-container *ngSwitchDefault >
      <ng-container [ngTemplateOutlet]="title"></ng-container>
      <ng-container [ngTemplateOutlet]="content"></ng-container>
      <ng-container [ngTemplateOutlet]="footer"></ng-container>
    </ng-container>

    <ng-template #title>
      <ng-content select="[title]" ></ng-content>
    </ng-template>
    <ng-template #content>
      <ng-content ></ng-content>
    </ng-template>
    <ng-template #footer>
      <ng-content select="[footer]" ></ng-content>
    </ng-template>

  </ng-container>

  `,
  styleUrls: ['./modalx.component.scss']
})
export class ModalxComponent implements OnInit {

  @Input() title: string;
  @Input() width = 300;
  @Input() type: 'modal' | 'drawer' | 'inline' = 'inline';
  @Input() visible = false;
  @Input() closeable = true;
  @Input() placement: 'left' | 'right' = 'right';
  @Output() close = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  cancel() {
    this.visible = false;
    this.close.emit('');
  }

  ok() {
    this.visible = false;
    this.close.emit('ok');
  }

}
