import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCommComponent } from './details-comm.component';

describe('DetailsCommComponent', () => {
  let component: DetailsCommComponent;
  let fixture: ComponentFixture<DetailsCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
