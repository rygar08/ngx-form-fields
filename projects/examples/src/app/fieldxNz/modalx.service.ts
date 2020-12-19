
import { Injectable } from '@angular/core';
import { NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { componentViewer } from './test.component';

@Injectable()
export class ModalxService {

  item: componentViewer;
  drawerRef: NzDrawerRef<any, string>;
  modalRef: NzModalRef<unknown, any>;

  constructor(
    private modal: NzModalService,
    private drawer: NzDrawerService) {

  }


  public show(item: componentViewer): void {
    this.item = item;

    if (item.type === 'drawer') {
      this.drawerRef = this.drawer.create<any, { value: string }, string>({
        nzTitle: item.title,
        nzContent: item.component,
        nzContentParams: item.data,
        nzMaskClosable: item.closeable,
        nzClosable: item.closeable,
        nzWidth: item.width
      });

      // this.drawerRef.afterOpen.subscribe(() => { });
      // this.drawerRef.afterClose.subscribe(data => {
      //   if (typeof data === 'string') { }
      // });

    } else {
      this.modalRef = this.modal.create({
        nzTitle: item.title,
        nzContent: item.component,
        nzFooter: null,
        nzMaskClosable: item.maskCloseable,
        nzClosable: item.closeable,
        nzComponentParams: item.data,
        nzWidth: item.width
      });
    }

  }

  public close() {
    if (this.item) {
      if (this.item.type === 'drawer') {
        this.drawerRef.close();
      } else {
        this.modalRef.close();
      }
    }
  }





}


