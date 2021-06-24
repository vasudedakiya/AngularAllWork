import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenralNewsComponent } from './genral-news.component';

describe('GenralNewsComponent', () => {
  let component: GenralNewsComponent;
  let fixture: ComponentFixture<GenralNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenralNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenralNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
