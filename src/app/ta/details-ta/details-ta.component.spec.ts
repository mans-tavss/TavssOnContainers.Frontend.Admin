import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTaComponent } from './details-ta.component';

describe('DetailsTaComponent', () => {
  let component: DetailsTaComponent;
  let fixture: ComponentFixture<DetailsTaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
