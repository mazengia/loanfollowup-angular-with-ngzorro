import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators,ReactiveFormsModule} from "@angular/forms";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {CategoryService} from "../../../services/category.service";
import {NzDrawerRef} from "ng-zorro-antd/drawer";
import {finalize, first} from "rxjs/operators";

@Component({
  selector: 'app-create-update-category',
  templateUrl: './create-update-category.component.html',
  styleUrls: ['./create-update-category.component.scss']
})
export class CreateUpdateCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  isAddMode = true;
  loading = false;
  submitted = false;
  @Input() value: number;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private notification: NzNotificationService,
    private drawerRef: NzDrawerRef<string>
  ) {
    this.categoryForm = this.fb.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.isAddMode = !this.value;
    if (this.value) {
      this.loadCategoryById();
    }

  }

  loadCategoryById() {
    this.categoryService
      .findCategoryById(this.value)
      .pipe(first())
      .subscribe((res) => {
        if (!this.isAddMode) {
          this.categoryForm.patchValue(res);
        }
      });
  }

  get id() {
    return this.categoryForm.controls.id;
  }

  get f() {
    return this.categoryForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.categoryForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createCategory();
    } else {
      this.updateCategory();
    }
  }

  createCategory(): void {
    for (const key in this.categoryForm.controls) {
      if (this.categoryForm.controls.hasOwnProperty(key)) {
        this.categoryForm.controls[key].markAsDirty();
        this.categoryForm.controls[key].updateValueAndValidity();
      }
    }

    this.categoryService.addCategory(this.categoryForm.value)
      .pipe(finalize(() => {
        this.drawerRef.close()
      }))
      .subscribe(
        (data) => {
          this.createNotification(
            'success',
            'Category',
            'Category Successfully Created'
           );
        },
        (error) => {
          console.log('error = ', error)
          this.createNotification(
            'error',
            'Error',
            error.apierror.debugMessage);
        }
      );
  }

  updateCategory(): void {

    for (const key in this.categoryForm.controls) {
      if (this.categoryForm.controls.hasOwnProperty(key)) {
        this.categoryForm.controls[key].markAsDirty();
        this.categoryForm.controls[key].updateValueAndValidity();
      }
    }
    this.categoryService
      .updateCategory(this.value, this.categoryForm.value)
      .subscribe(
        data=> {

          this.createNotification(
            'success',
            'Category',
            'Category Successfully Updated'
          );
        },
        error => {
          this.createNotification(
            'error',
            'Error',
            error.apierror.debugMessage);
        }
        );
        }
  createNotification(type: string, title: string, message: string): void {
    this.notification.create(type, title, message);
  }

}
