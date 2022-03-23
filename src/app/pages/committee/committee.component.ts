import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CommitteeService} from "../../services/committee.service";
import {Committee} from "../../model/committee";
import {NzDrawerRef, NzDrawerService} from "ng-zorro-antd/drawer";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {CreateUpdateCommitteeComponent} from "./create-update-committee/create-update-committee.component";

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.scss']
})
export class CommitteeComponent implements OnInit {
  @ViewChild(
    'drawerTemplate',
    {static: false})
  drawerTemplate?: TemplateRef<{
    $implicit: { value: string };
    drawerRef: NzDrawerRef<string>;
  }>;
  committee: any;
  pageSize = 10;
  pageNumber = 1;
  totalElements = 0;

  constructor(
    private notification: NzNotificationService,
    private drawerService: NzDrawerService,
    private committeeService: CommitteeService) {
  }

  ngOnInit(): void {
    this.loadCommittee();
  }

  deleteOperator(id: number) {
    this.committeeService.deleteCommittee(id).subscribe(
      (data) => {
        this.loadCommittee();
        this.createNotification(
          'success',
          'Committee',
          'Committee Successfully Deleted'
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
    const drawerRef = this.drawerService.create<CreateUpdateCommitteeComponent,
      { id: number }>({
      nzTitle: `${id ? 'Update' : 'Create'} Committee`,
      nzWidth:450,
      nzContent: CreateUpdateCommitteeComponent,
      nzContentParams: {
        value: id,
      },
      nzClosable: true,
      nzKeyboard: true,
    });

    drawerRef.afterClose.subscribe(() => {
      this.loadCommittee()
    })
  }

  cancel(): void {
    // this.nzMessageService.info('click cancel');
  }

  loadCommittee(reset: boolean = false) {
    if (reset) {
      this.pageNumber = 1;
    }
    this.committeeService.getCommittee(this.pageNumber - 1, this.pageSize).subscribe(
      res => {
        this.committee = res._embedded.committeeDToes;
        this.totalElements = res.page.totalElements;

      })
  }

  createNotification(type: string, title: string, message: string): void {
    this.notification.create(type, title, message);
  }
}
