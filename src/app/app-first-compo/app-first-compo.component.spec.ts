import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFirstCompoComponent } from './app-first-compo.component';

describe('AppFirstCompoComponent', () => {
  let component: AppFirstCompoComponent;
  let fixture: ComponentFixture<AppFirstCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFirstCompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFirstCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
