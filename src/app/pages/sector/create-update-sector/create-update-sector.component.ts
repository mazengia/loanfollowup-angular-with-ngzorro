import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
 import {NzNotificationService} from "ng-zorro-antd/notification";
import {NzDrawerRef} from "ng-zorro-antd/drawer";
import {finalize, first} from "rxjs/operators";
import {SectorService} from "../../../services/sector.service";

@Component({
  selector: 'app-create-update-sector',
  templateUrl: './create-update-sector.component.html',
  styleUrls: ['./create-update-sector.component.scss']
})
export class CreateUpdateSectorComponent implements OnInit {
  sectorForm: FormGroup;
  isAddMode = true;
  loading = false;
  submitted = false;
  @Input() value: number;

  constructor(
    private fb: FormBuilder,
    private sectorService: SectorService,
    private notification: NzNotificationService,
    private drawerRef: NzDrawerRef<string>
  ) {
    this.sectorForm = this.fb.group({
      name: ['', [Validators.required, Validators.required]]
    });
  }

  ngOnInit(): void {
    this.isAddMode = !this.value;
    if (this.value) {
      this.loadSectorById();
    }

  }

  loadSectorById() {
    this.sectorService
      .findSectorById(this.value)
      .pipe(first())
      .subscribe((res) => {
        if (!this.isAddMode) {
          this.sectorForm.patchValue(res);
        }
      });
  }

  get id() {
    return this.sectorForm.controls.id;
  }

  get f() {
    return this.sectorForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.sectorForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createSector();
    } else {
      this.updateSector();
    }
  }

  createSector(): void {
    for (const key in this.sectorForm.controls) {
      if (this.sectorForm.controls.hasOwnProperty(key)) {
        this.sectorForm.controls[key].markAsDirty();
        this.sectorForm.controls[key].updateValueAndValidity();
      }
    }

    this.sectorService.addSectors(this.sectorForm.value)
      .pipe(finalize(() => {
        this.drawerRef.close()
      }))
      .subscribe(
        (data) => {
          this.createNotification(
            'success',
            'Sector',
            'Sector Successfully Created'
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

  updateSector(): void {

    for (const key in this.sectorForm.controls) {
      if (this.sectorForm.controls.hasOwnProperty(key)) {
        this.sectorForm.controls[key].markAsDirty();
        this.sectorForm.controls[key].updateValueAndValidity();
      }
    }
    this.sectorService
      .updateSector(this.value, this.sectorForm.value)
      .subscribe(
        data=> {

          this.createNotification(
            'success',
            'Sector',
            'Sector Successfully Updated'
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
