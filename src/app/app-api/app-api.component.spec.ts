import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppApiComponent } from './app-api.component';

describe('AppApiComponent', () => {
  let component: AppApiComponent;
  let fixture: ComponentFixture<AppApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
