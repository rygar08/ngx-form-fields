import { Component, OnInit,   Type } from '@angular/core';
import { ModalxService } from './modalx.service';


@Component({
  selector: 'app-test',
  template: `

  <p>test works! {{count}}</p>
  <button nzType="primary" (click)="close()" nz-button>Confirm</button>
  {{ athlete }}


  `
})
export class TestComponent implements OnInit {

  count = 0;
  athlete = 'athlete';

  constructor(private mx: ModalxService) {

    this.count = Math.random() * 2;
  }

  ngOnInit(): void {
  }

  close(): void {
    this.mx.close();
  }

}

