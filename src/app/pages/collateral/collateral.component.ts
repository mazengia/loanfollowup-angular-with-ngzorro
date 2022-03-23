import { Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
 import {NzDrawerRef, NzDrawerService} from "ng-zorro-antd/drawer";
import {NzNotificationService} from "ng-zorro-antd/notification";
  import {CollateralService} from "../../services/collateral.service";
import {CreateUpdateCollateralComponent} from "./create-update-collateral/create-update-collateral.component";

@Component({
  selector: 'app-collateral',
  templateUrl: './collateral.component.html',
  styleUrls: ['./collateral.component.scss']
})
export class CollateralComponent implements OnInit {
  @ViewChild(
    'drawerTemplate',
    { static: false })
  drawerTemplate?: TemplateRef<{
    $implicit: { value: string };
    drawerRef: NzDrawerRef<string>;
  }>;
  collateral: any;
  pageSize = 10;
  pageNumber = 1;
  totalElements = 0;
  constructor(
    private notification: NzNotificationService,
    private drawerService: NzDrawerService,
    private collateralService: CollateralService) {
  }

  ngOnInit(): void {
    this.loadCollateral();
  }
  deleteOperator(id: number) {
    this.collateralService.deleteCollaterals(id).subscribe(
      (data) => {
        this.loadCollateral();
        this.createNotification(
          'success',
          'Collateral',
          'Collateral Successfully Deleted'
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
    const drawerRef = this.drawerService.create<CreateUpdateCollateralComponent,
      { id: number }>({
      nzTitle: `${id ? 'Update' : 'Create'} Collateral`,
      nzWidth:450,
      nzContent: CreateUpdateCollateralComponent,
      nzContentParams: {
        value: id,
      },
      nzClosable: true,
      nzKeyboard: true,
    });

    drawerRef.afterClose.subscribe(() => {
      this.loadCollateral()
    })
  }
  cancel(): void {
    // this.nzMessageService.info('click cancel');
  }

  loadCollateral(reset: boolean = false) {
    if (reset) {
      this.pageNumber = 1;
    }
    this.collateralService.getCollaterals(this.pageNumber - 1, this.pageSize).subscribe(
      res => {
        this.collateral = res._embedded.collateralDToes;
        this.totalElements = res.page.totalElements;

      })
  }
  createNotification(type: string, title: string, message: string): void {
    this.notification.create(type, title, message);
  }
}
