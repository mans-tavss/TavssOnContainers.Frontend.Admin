import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommComponent } from './create-comm.component';

describe('CreateCommComponent', () => {
  let component: CreateCommComponent;
  let fixture: ComponentFixture<CreateCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
