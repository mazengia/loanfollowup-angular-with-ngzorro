import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BusinessService} from '../../services/business.service';
import {Business} from '../../model/business';
import {NzDrawerRef, NzDrawerService} from "ng-zorro-antd/drawer";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {CreateUpdateBusinessComponent} from "./create-update-business/create-update-business.component";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  @ViewChild(
    'drawerTemplate',
    {static: false})
  drawerTemplate?: TemplateRef<{
    $implicit: { value: string };
    drawerRef: NzDrawerRef<string>;
  }>;
  pageSize = 10;
  pageNumber = 1;
  totalElements = 0;
  searchValue = '';
  visible = false;
  // @ts-ignore
  listOfData: DataItem[] = [];
  business: Business[] = [];
  listOfBusinessData: any;

  constructor(
    private notification: NzNotificationService,
    private businessService: BusinessService,
    private drawerService: NzDrawerService,
  ) {
  }

  ngOnInit(): void {
    this.loadBusiness();
  }


  openDrawer(id: number): void {
    const drawerRef = this.drawerService.create<CreateUpdateBusinessComponent,
      { id: number }>({
      nzTitle: `${id ? 'Update' : 'Create'} Business`,
      nzWidth:450,
      nzContent: CreateUpdateBusinessComponent,
      nzContentParams: {
        value: id,
      },
      nzClosable: true,
      nzKeyboard: true,
    });

    drawerRef.afterClose.subscribe(() => {
      this.loadBusiness()
    })
  }

  cancel(): void {
    // this.nzMessageService.info('click cancel');
  }

  loadBusiness(reset: boolean = false) {
    if (reset) {
      this.pageNumber = 1;
    }
    this.businessService.getBusiness(this.pageNumber - 1, this.pageSize).subscribe(
      res => {
        this.business = res._embedded.businessFormDtoes;
        this.totalElements = res.page.totalElements;
        this.filterBusiness();
      })

  }

  searchBusiness(): void {
    this.visible = false;
    this.business = this.listOfData.filter(
      (item: Business) => item.name.indexOf(this.searchValue) !== -1);
  }

  filterBusiness() {
    for (const item of this.business) {
      const variable = {
        id: item.id,
        name: item.name
      }
      this.listOfData.push(variable);
      this.listOfBusinessData = [...this.listOfData];
    }
  }

  resetBusiness(): void {
    this.searchValue = '';
    this.searchBusiness();
  }

  deleteBusiness(id: number) {
    this.businessService.deleteBusiness(id).subscribe(
      (data) => {
        this.loadBusiness();
        this.createNotification(
          'success',
          'Business',
          'Business Successfully Deleted'
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

  createNotification(type: string, title: string, message: string): void {
    this.notification.create(type, title, message);
  }
}
