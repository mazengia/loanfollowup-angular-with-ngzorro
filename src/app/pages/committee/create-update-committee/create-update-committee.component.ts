import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
 import {NzNotificationService} from "ng-zorro-antd/notification";
import {NzDrawerRef} from "ng-zorro-antd/drawer";
import {finalize, first} from "rxjs/operators";
import {CommitteeService} from "../../../services/committee.service";

@Component({
  selector: 'app-create-update-committee',
  templateUrl: './create-update-committee.component.html',
  styleUrls: ['./create-update-committee.component.scss']
})
export class CreateUpdateCommitteeComponent implements OnInit {

  committeeForm: FormGroup;
  isAddMode = true;
  loading = false;
  submitted = false;
  @Input() value: number;

  constructor(
    private fb: FormBuilder,
    private committeeService: CommitteeService,
    private notification: NzNotificationService,
    private drawerRef: NzDrawerRef<string>
  ) {
    this.committeeForm = this.fb.group({
      title: ['', [Validators.required]],
      type: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.isAddMode = !this.value;
    if (this.value) {
      this.loadCommitteeById();
    }

  }

  loadCommitteeById() {
    this.committeeService
      .findCommitteeById(this.value)
      .pipe(first())
      .subscribe((res) => {
        if (!this.isAddMode) {
          this.committeeForm.patchValue(res);
        }
      });
  }

  get id() {
    return this.committeeForm.controls.id;
  }

  get f() {
    return this.committeeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.committeeForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createCommittee();
    } else {
      this.updateCommittee();
    }
  }

  createCommittee(): void {
    for (const key in this.committeeForm.controls) {
      if (this.committeeForm.controls.hasOwnProperty(key)) {
        this.committeeForm.controls[key].markAsDirty();
        this.committeeForm.controls[key].updateValueAndValidity();
      }
    }

    this.committeeService.addCommittee(this.committeeForm.value)
      .pipe(finalize(() => {
        this.drawerRef.close()
      }))
      .subscribe(
        (data) => {
          this.createNotification(
            'success',
            'Committee',
            'Committee Successfully Created'
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

  updateCommittee(): void {

    for (const key in this.committeeForm.controls) {
      if (this.committeeForm.controls.hasOwnProperty(key)) {
        this.committeeForm.controls[key].markAsDirty();
        this.committeeForm.controls[key].updateValueAndValidity();
      }
    }
    this.committeeService
      .updateCommittee(this.value, this.committeeForm.value)
      .subscribe(
        data=> {

          this.createNotification(
            'success',
            'Committee',
            'Committee Successfully Updated'
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
