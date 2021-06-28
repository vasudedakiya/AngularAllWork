import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedResorceComponent } from './used-resorce.component';

describe('UsedResorceComponent', () => {
  let component: UsedResorceComponent;
  let fixture: ComponentFixture<UsedResorceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedResorceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedResorceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
