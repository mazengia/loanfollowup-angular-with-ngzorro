import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
 import {NzNotificationService} from "ng-zorro-antd/notification";
import {NzDrawerRef} from "ng-zorro-antd/drawer";
import {finalize, first} from "rxjs/operators";
import {BusinessService} from "../../../services/business.service";

@Component({
  selector: 'app-create-update-business',
  templateUrl: './create-update-business.component.html',
  styleUrls: ['./create-update-business.component.scss']
})
export class CreateUpdateBusinessComponent implements OnInit {
  businessForm: FormGroup;
  isAddMode = true;
  loading = false;
  submitted = false;
  @Input() value: number;

  constructor(
    private fb: FormBuilder,
    private businessService: BusinessService,
    private notification: NzNotificationService,
    private drawerRef: NzDrawerRef<string>
  ) {
    this.businessForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.isAddMode = !this.value;
    if (this.value) {
      this.loadBusinessById();
    }

  }

  loadBusinessById() {
    this.businessService
      .findBusinessById(this.value)
      .pipe(first())
      .subscribe((res) => {
        if (!this.isAddMode) {
          this.businessForm.patchValue(res);
        }
      });
  }

  get id() {
    return this.businessForm.controls.id;
  }

  get f() {
    return this.businessForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.businessForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createBusiness();
    } else {
      this.updateBusiness();
    }
  }

  createBusiness(): void {
    for (const key in this.businessForm.controls) {
      if (this.businessForm.controls.hasOwnProperty(key)) {
        this.businessForm.controls[key].markAsDirty();
        this.businessForm.controls[key].updateValueAndValidity();
      }
    }

    this.businessService.addBusiness(this.businessForm.value)
      .pipe(finalize(() => {
        this.drawerRef.close()
      }))
      .subscribe(
        (data) => {
          this.createNotification(
            'success',
            'Business',
            'Business Successfully Created'
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

  updateBusiness(): void {

    for (const key in this.businessForm.controls) {
      if (this.businessForm.controls.hasOwnProperty(key)) {
        this.businessForm.controls[key].markAsDirty();
        this.businessForm.controls[key].updateValueAndValidity();
      }
    }
    this.businessService
      .updateBusiness(this.value, this.businessForm.value)
      .subscribe(
        data=> {

          this.createNotification(
            'success',
            'Business',
            'Business Successfully Updated'
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
