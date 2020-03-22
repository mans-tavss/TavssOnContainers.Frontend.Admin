import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuntyComponent } from './communty.component';

describe('CommuntyComponent', () => {
  let component: CommuntyComponent;
  let fixture: ComponentFixture<CommuntyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommuntyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuntyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
