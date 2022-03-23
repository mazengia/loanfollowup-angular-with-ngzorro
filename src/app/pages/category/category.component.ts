import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CreateUpdateCategoryComponent} from "./create-update-category/create-update-category.component";
import {CategoryService} from "../../services/category.service";
import {NzDrawerRef, NzDrawerService} from "ng-zorro-antd/drawer";
import {Category} from "../../model/category";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @ViewChild(
    'drawerTemplate',
    {static: false})
    drawerTemplate?: TemplateRef<{
    $implicit: { value: string };
    drawerRef: NzDrawerRef<string>;
  }>;
  category: any;
  categories: Category[] = []
  pageSize = 10;
  pageNumber = 1;
  totalElements = 0;

  constructor(
    private notification: NzNotificationService,
    private categoryService: CategoryService,
    private drawerService: NzDrawerService,
  ) {
  }

  ngOnInit(): void {
    this.loadCategory();
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(
      (data) => {
        this.loadCategory();
        this.createNotification(
          'success',
          'Category',
          'Category Successfully Deleted'
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
    const drawerRef = this.drawerService.create<CreateUpdateCategoryComponent,
      { id: number }>({
      nzTitle: `${id ? 'Update' : 'Create'} Category`,
      nzWidth:450,
      nzContent: CreateUpdateCategoryComponent,
      nzContentParams: {
        value: id,
      },
      nzClosable: true,
      nzKeyboard: true,
    });

    drawerRef.afterClose.subscribe(() => {
      this.loadCategory()
    })
  }

  cancel(): void {
    // this.nzMessageService.info('click cancel');
  }

  loadCategory(reset: boolean = false) {
    if (reset) {
      this.pageNumber = 1;
    }
    this.categoryService.getCategories(this.pageNumber - 1, this.pageSize).subscribe(
      res => {
        this.category = res._embedded.categoryDToes;
        this.totalElements = res.page.totalElements;

      })

  }

  createNotification(type: string, title: string, message: string): void {
    this.notification.create(type, title, message);
  }
}
