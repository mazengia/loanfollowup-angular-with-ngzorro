import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
 import {NzNotificationService} from "ng-zorro-antd/notification";
import {NzDrawerRef} from "ng-zorro-antd/drawer";
import {finalize, first} from "rxjs/operators";
import {CollateralService} from "../../../services/collateral.service";

@Component({
  selector: 'app-create-update-collateral',
  templateUrl: './create-update-collateral.component.html',
  styleUrls: ['./create-update-collateral.component.scss']
})
export class CreateUpdateCollateralComponent implements OnInit {

  collateralForm: FormGroup;
  isAddMode = true;
  loading = false;
  submitted = false;
  @Input() value: number;

  constructor(
    private fb: FormBuilder,
    private collateralService: CollateralService,
    private notification: NzNotificationService,
    private drawerRef: NzDrawerRef<string>
  ) {
    this.collateralForm = this.fb.group({
      name: ['', Validators.required],
      collateralDegree: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.isAddMode = !this.value;
    if (this.value) {
      this.loadCollateralById();
    }

  }

  loadCollateralById() {
    this.collateralService
      .findCollateralsById(this.value)
      .pipe(first())
      .subscribe((res) => {
        if (!this.isAddMode) {
          this.collateralForm.patchValue(res);
        }
      });
  }

  get id() {
    return this.collateralForm.controls.id;
  }

  get f() {
    return this.collateralForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.collateralForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createCollateral();
    } else {
      this.updateCollateral();
    }
  }

  createCollateral(): void {
    for (const key in this.collateralForm.controls) {
      if (this.collateralForm.controls.hasOwnProperty(key)) {
        this.collateralForm.controls[key].markAsDirty();
        this.collateralForm.controls[key].updateValueAndValidity();
      }
    }

    this.collateralService.addCollaterals(this.collateralForm.value)
      .pipe(finalize(() => {
        this.drawerRef.close()
      }))
      .subscribe(
        (data) => {
          this.createNotification(
            'success',
            'Collateral',
            'Collateral Successfully Created'
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

  updateCollateral(): void {

    for (const key in this.collateralForm.controls) {
      if (this.collateralForm.controls.hasOwnProperty(key)) {
        this.collateralForm.controls[key].markAsDirty();
        this.collateralForm.controls[key].updateValueAndValidity();
      }
    }
    console.log(this.collateralForm.value)
    this.collateralService
      .updateCollaterals(this.value, this.collateralForm.value)
      .subscribe(
        data=> {

          this.createNotification(
            'success',
            'Collateral',
            'Collateral Successfully Updated'
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
