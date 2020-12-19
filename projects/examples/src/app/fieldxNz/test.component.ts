import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

  <p>test works! {{count}}</p>

  `
})
export class TestComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
