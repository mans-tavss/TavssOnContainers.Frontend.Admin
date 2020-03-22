import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaComponent } from './update-ta.component';

describe('UpdateTaComponent', () => {
  let component: UpdateTaComponent;
  let fixture: ComponentFixture<UpdateTaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
