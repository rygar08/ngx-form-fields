import { Component, OnInit, SkipSelf,  Type } from '@angular/core';
import { ModalxService } from './modalx.service';


@Component({
  selector: 'app-test',
  template: `

  <p>test works! {{count}}</p>
  <button nzType="primary" (click)="close()" nz-button>Confirm</button>

  `
})
export class TestComponent implements OnInit {

  count = 0;

  constructor(private mx: ModalxService) {

    this.count = Math.random() * 2;
  }

  ngOnInit(): void {
  }

  close(): void {
    this.mx.close();
  }

}




export class componentViewer {
  component: Type<any>;
  data: any;
  type: 'modal' | 'drawer' = 'modal';
  title: string;
  width = 400;
  closeable = true;
  maskCloseable = true;
  placement: 'left' | 'right' = 'right';
  Style: string;
}
