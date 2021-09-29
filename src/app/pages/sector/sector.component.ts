import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {FormBuilder,  FormGroup,  Validators} from '@angular/forms';
import {SectorService} from "../../services/sector.service";

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})
export class SectorComponent implements OnInit , AfterContentChecked {
  searchValue = '';
  visible = false;
  visibleDrawer = false;

  allUserData: any;
  listOfDisplayData: any;
  // @ts-ignore
  listOfData: DataItem[] = [];
  validateForm: FormGroup;
  constructor(private fb: FormBuilder, private sectorService: SectorService) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required, Validators.required]]
    });
  }
  ngOnInit(): void {
 this.getSectorData();
  }
  open(): void {   this.visibleDrawer = true;
  }
  close(): void {  this.visibleDrawer = false;
  }

  // forms inside drawer


  submitForm(value: { name: string; }): void {
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
    console.log(value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

  ngAfterContentChecked(): void {
  }
  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    // @ts-ignore
    this.listOfDisplayData = this.listOfData.filter((item: DataItem) => item.username.indexOf(this.searchValue) !== -1);
  }
  getSectorData(){
    this.sectorService.getSector().subscribe( data => {
        this.allUserData = data;
        data.forEach((value) => {
          const variab = {
            name: value.name
          };
          this.listOfData.push(variab);
          this.listOfDisplayData = [...this.listOfData];
        }); },
      error => {console.log( error ); });
  }
}
