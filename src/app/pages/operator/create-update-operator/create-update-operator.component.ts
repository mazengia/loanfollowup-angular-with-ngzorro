import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
 import {NzNotificationService} from "ng-zorro-antd/notification";
import {NzDrawerRef} from "ng-zorro-antd/drawer";
import {finalize, first} from "rxjs/operators";
import {OperatorService} from "../../../services/operator.service";

@Component({
  selector: 'app-create-update-operator',
  templateUrl: './create-update-operator.component.html',
  styleUrls: ['./create-update-operator.component.scss']
})
export class CreateUpdateOperatorComponent implements OnInit {

  operatorForm: FormGroup;
  isAddMode = true;
  loading = false;
  submitted = false;
  @Input() value: number;

  constructor(
    private fb: FormBuilder,
    private operatorService: OperatorService,
    private notification: NzNotificationService,
    private drawerRef: NzDrawerRef<string>
  ) {
    this.operatorForm = this.fb.group({
      name: ['', [Validators.required, Validators.required]]
    });
  }

  ngOnInit(): void {
    this.isAddMode = !this.value;
    if (this.value) {
      this.loadOperatorById();
    }

  }

  loadOperatorById() {
    this.operatorService
      .findOperatorsById(this.value)
      .pipe(first())
      .subscribe((res) => {
        if (!this.isAddMode) {
          this.operatorForm.patchValue(res);
        }
      });
  }

  get id() {
    return this.operatorForm.controls.id;
  }

  get f() {
    return this.operatorForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.operatorForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createOperator();
    } else {
      this.updateOperator();
    }
  }

  createOperator(): void {
    for (const key in this.operatorForm.controls) {
      if (this.operatorForm.controls.hasOwnProperty(key)) {
        this.operatorForm.controls[key].markAsDirty();
        this.operatorForm.controls[key].updateValueAndValidity();
      }
    }

    this.operatorService.addOperators(this.operatorForm.value)
      .pipe(finalize(() => {
        this.drawerRef.close()
      }))
      .subscribe(
        (data) => {
          this.createNotification(
            'success',
            'Operator',
            'Operator Successfully Created'
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

  updateOperator(): void {

    for (const key in this.operatorForm.controls) {
      if (this.operatorForm.controls.hasOwnProperty(key)) {
        this.operatorForm.controls[key].markAsDirty();
        this.operatorForm.controls[key].updateValueAndValidity();
      }
    }
    this.operatorService
      .updateOperators(this.value, this.operatorForm.value)
      .subscribe(
        data=> {

          this.createNotification(
            'success',
            'Operator',
            'Operator Successfully Updated'
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
