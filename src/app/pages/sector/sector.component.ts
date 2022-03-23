import { Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SectorService} from '../../services/sector.service';
import {Sector} from '../../model/sector';
import {NzNotificationService} from "ng-zorro-antd/notification";
 import {NzDrawerRef, NzDrawerService} from "ng-zorro-antd/drawer";
 import {CreateUpdateSectorComponent} from "./create-update-sector/create-update-sector.component";

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})

export class SectorComponent implements OnInit  {
  @ViewChild('drawerTemplate', { static: false }) drawerTemplate?: TemplateRef<{
    $implicit: { value: string };
    drawerRef: NzDrawerRef<string>;
  }>;
  sector: any;
  sectors: Sector[] = []
  pageSize = 10;
  pageNumber = 1;
  totalElements = 0;
  constructor(
    private fb: FormBuilder,
    private sectorService: SectorService,
    private notification: NzNotificationService,
    private drawerService: NzDrawerService,)
  {  }

  ngOnInit(): void {
    this.loadSector();
  }
  deleteSector(id: number) {
    this.sectorService.deleteSectors(id).subscribe(
      (data) => {
        this.loadSector();
        this.createNotification(
          'success',
          'Sector',
          'Sector Successfully Deleted'
        );
      },
      (error) => {
        this.createNotification(
          'error',
          'Error',
          error.statusTex
        );
      }
    )
  }
  openDrawer(id: number): void {
    const drawerRef = this.drawerService.create<CreateUpdateSectorComponent,
      { id: number }>({
      nzTitle: `${id ? 'Update' : 'Create'} Sector`,
      nzWidth:450,
      nzContent: CreateUpdateSectorComponent,
      nzContentParams: {
        value: id,
      },
      nzClosable: true,
      nzKeyboard: true,
    });

    drawerRef.afterClose.subscribe(() => {
      this.loadSector()
    })
  }
  cancel(): void {
    // this.nzMessageService.info('click cancel');
  }

  loadSector(reset: boolean = false) {
    if (reset) {
      this.pageNumber = 1;
    }
    this.sectorService.getSectors(this.pageNumber - 1, this.pageSize).subscribe(
      res => {
        // @ts-ignore
          this.sector = res._embedded.sectorDToes;
          this.totalElements = res.page.totalElements;

      }

      )

  }
  createNotification(type: string, title: string, message: string): void {
    this.notification.create(type, title, message);
  }

}
