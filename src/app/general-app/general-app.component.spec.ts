import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAppComponent } from './general-app.component';

describe('GeneralAppComponent', () => {
  let component: GeneralAppComponent;
  let fixture: ComponentFixture<GeneralAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
