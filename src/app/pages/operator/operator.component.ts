import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
 import {OperatorService} from '../../services/operator.service';
 import {NzNotificationService} from "ng-zorro-antd/notification";
 import {NzDrawerRef, NzDrawerService} from "ng-zorro-antd/drawer";
  import {Operator} from "../../model/operator";
import {CreateUpdateOperatorComponent} from "./create-update-operator/create-update-operator.component";

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit {
    @ViewChild(
      'drawerTemplate',
      { static: false })
    drawerTemplate?: TemplateRef<{
      $implicit: { value: string };
      drawerRef: NzDrawerRef<string>;
    }>;
    operator: any;
     pageSize = 10;
    pageNumber = 1;
    totalElements = 0;
  constructor(
    private notification: NzNotificationService,
    private drawerService: NzDrawerService,
    private operatorService: OperatorService) {
  }

  ngOnInit(): void {
    this.loadOperator();
  }
  deleteOperator(id: number) {
    this.operatorService.deleteOperators(id).subscribe(
      (data) => {
        this.loadOperator();
        this.createNotification(
          'success',
          'Operator',
          'Operator Successfully Deleted'
        );
      },
      (error) => {
        this.createNotification(
          'error',
          'Error',
          error.error.apierror.debugMessage
        );
      }
    )
  }
  openDrawer(id: number): void {
    const drawerRef = this.drawerService.create<CreateUpdateOperatorComponent,
      { id: number }>({
      nzTitle: `${id ? 'Update' : 'Create'} Operator`,
      nzWidth:450,
      nzContent: CreateUpdateOperatorComponent,
      nzContentParams: {
        value: id,
      },
      nzClosable: true,
      nzKeyboard: true,
    });

    drawerRef.afterClose.subscribe(() => {
      this.loadOperator()
    })
  }
  cancel(): void {
    // this.nzMessageService.info('click cancel');
  }

  loadOperator(reset: boolean = false) {
    if (reset) {
      this.pageNumber = 1;
    }
    this.operatorService.getOperators(this.pageNumber - 1, this.pageSize).subscribe(
      res => {
          this.operator = res._embedded.operatorDtoes;
          this.totalElements = res.page.totalElements;

      })

  }
  createNotification(type: string, title: string, message: string): void {
    this.notification.create(type, title, message);
  }
}
