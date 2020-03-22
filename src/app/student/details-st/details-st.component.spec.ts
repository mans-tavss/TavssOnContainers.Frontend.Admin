import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStComponent } from './details-st.component';

describe('DetailsStComponent', () => {
  let component: DetailsStComponent;
  let fixture: ComponentFixture<DetailsStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
