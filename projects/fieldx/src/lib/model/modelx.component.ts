import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ViewItem } from './modelx';
import { ViewDirective } from './ViewDirective';

@Component({
  selector: 'modelx',
  template: `` })
export class ModelxComponent implements OnInit, AfterViewInit {

  @ViewChild(ViewDirective, { static: true }) viewHost: ViewDirective;

  @Input() formViewer: 'drawer' | 'modal' | 'inline' = 'drawer';
  @Input() selectedId: any;
  @Input() model: string;
  @Input() filter: string;
  @Input() groupby: string;
  @Input() listView: ViewItem;
  @Input() formView: ViewItem;

  listVisible = true;
  formVisible = false;
  loading = false;
  scrollHeight: number;
  loadForm$ = new Subject<any>();
  loadList$ = new Subject();

  constructor() {
  }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  refresh() {

  }

  showForm(id: string): void {
    if (this.formViewer === 'inline') {
      this.listVisible = true;
    }
    this.formVisible = true;
    this.loadForm$.next(id);
  }

  showList() {
    this.listVisible = false;
    this.formVisible = false;
    this.loadList$.next();
  }

  // loadComponent(item: ViewItem) {

  //   // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
  //   // const viewContainerRef = this.viewHost.viewContainerRef;
  //   // viewContainerRef.clear();

  //   // const componentRef = viewContainerRef.createComponent<any>(componentFactory);
  //   // componentRef.instance.data = this.listView.data;

  // }


}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app',
//   template: `
//     <div>
//       <ngx-datatable [rows]="rows" [columns]="columns"> </ngx-datatable>
//     </div>
//   `
// })
// export class AppComponent {
//   rows = [
//     { name: 'Austin', gender: 'Male', company: 'Swimlane' },
//     { name: 'Dany', gender: 'Male', company: 'KFC' },
//     { name: 'Molly', gender: 'Female', company: 'Burger King' }
//   ];
//   columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
// }
