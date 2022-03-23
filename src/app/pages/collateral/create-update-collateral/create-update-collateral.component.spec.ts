import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateCollateralComponent } from './create-update-collateral.component';

describe('CreateUpdateCollateralComponent', () => {
  let component: CreateUpdateCollateralComponent;
  let fixture: ComponentFixture<CreateUpdateCollateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateCollateralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateCollateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
