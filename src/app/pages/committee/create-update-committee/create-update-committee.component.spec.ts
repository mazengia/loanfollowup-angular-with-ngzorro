import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateCommitteeComponent } from './create-update-committee.component';

describe('CreateUpdateCommitteeComponent', () => {
  let component: CreateUpdateCommitteeComponent;
  let fixture: ComponentFixture<CreateUpdateCommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateCommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
