import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateOperatorComponent } from './create-update-operator.component';

describe('CreateUpdateOperatorComponent', () => {
  let component: CreateUpdateOperatorComponent;
  let fixture: ComponentFixture<CreateUpdateOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
