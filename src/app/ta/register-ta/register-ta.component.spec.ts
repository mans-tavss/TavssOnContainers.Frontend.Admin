import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTaComponent } from './register-ta.component';

describe('RegisterTaComponent', () => {
  let component: RegisterTaComponent;
  let fixture: ComponentFixture<RegisterTaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterTaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
