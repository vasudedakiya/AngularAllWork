import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugdetailsComponent } from './drugdetails.component';

describe('DrugdetailsComponent', () => {
  let component: DrugdetailsComponent;
  let fixture: ComponentFixture<DrugdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
