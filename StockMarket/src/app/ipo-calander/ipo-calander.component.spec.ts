import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoCalanderComponent } from './ipo-calander.component';

describe('IpoCalanderComponent', () => {
  let component: IpoCalanderComponent;
  let fixture: ComponentFixture<IpoCalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpoCalanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
